using Microsoft.AspNetCore.Mvc;

namespace IgneConflatum.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GameController : ControllerBase
    {
        [HttpGet("{id}")]
        public string GetGame(string gameId)
        {
            return "To be implemented";
        }

    }
}