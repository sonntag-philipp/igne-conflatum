using IgneConflatum.Models;

namespace IgneConflatum.Clients
{
    public interface IWebClient
    {
        void UpdateCharacter(Character character);
        void RemoveCharacter(Character character);
    }
}
