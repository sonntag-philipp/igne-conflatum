using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IgneConflatum.Models
{
    public class Character
    {
        public string name { get; set; }
        public Bar[] bars { get; set; }
        public Effect[] effects { get; set; }
    }
}
