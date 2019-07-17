using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IgneConflatum.Models
{
    public class Game
    {
        public string Name { get; set; }

        public List<Character> Characters { get; private set; }
        public string Id { get; private set; }

        public Game()
        {
            Id = new Guid().ToString();
            Characters = new List<Character>();
        }

        public Game(string name): this()
        {
            Name = name;
        }
    }
}
