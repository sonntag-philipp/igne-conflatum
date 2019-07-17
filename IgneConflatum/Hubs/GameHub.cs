using IgneConflatum.Models;
using Microsoft.AspNetCore.SignalR;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;

namespace IgneConflatum.Hubs
{
    public class GameHub : Hub
    {
        public GameHub()
        {
            Program.Characters = new List<Character>();
            
        }


        public List<Character> Characters 
        {
            get
            {
                try
                {
                    var json = File.ReadAllText(@"C:\ic\game.json");
                    var c = JsonConvert.DeserializeObject<List<Character>>(json);
                    return c;
                }
                catch (Exception e)
                {
                    Console.WriteLine(e.Message);
                    return null;
                }
            }
            set 
            {
                try
                {
                    string json = JsonConvert.SerializeObject(value, Formatting.Indented);
                    File.WriteAllText(@"C:\ic\game.json", json);
                }
                catch (Exception e)
                {
                    Console.WriteLine(e.Message);
                }
            }
        }

        
        public async void UpdateCharacter(Character character)
        {
            var chars = Characters;

            if(chars != null)
            {
                var c = chars.Find(x => x.name == character.name);
            
                if(c == null)
                {
                    chars.Add(character);
                }
                else
                {
                    chars[chars.IndexOf(c)] = character;
                }

                Characters = chars;


                await Clients.Others.SendAsync("UpdateCharacter", character);
            }

        }

        /// <summary>
        /// Returns all characters of the game.
        /// </summary>
        public List<Character> GetAllCharacters()
        {
            var chars = Characters;

            if(chars == null)
            {
                chars = new List<Character>();
            }
            return chars;
        }

        /// <summary>
        /// Removes a specific character from the game.
        /// </summary>
        /// <param name="character"></param>
        public async void RemoveCharacter(Character character)
        {
            var chars = Characters;

            if(chars.Contains(character))
            {
                chars.Remove(character);
                Characters = chars;
                await Clients.Others.SendAsync("RemoveCharacter", character);
            }
        }
    }
}
