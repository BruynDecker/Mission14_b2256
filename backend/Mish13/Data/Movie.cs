using System;
using System.Collections.Generic;

using System.ComponentModel.DataAnnotations;

namespace Mish13.Data
{
    public class Movie
    {
        [Key]
        public int MovieId { get; set; }
        public string? Category { get; set; }
        public string? Title { get; set; }
        public int? Year { get; set; }
        public string? Director { get; set; }
        public string? Rating { get; set; }
        public string? Edited { get; set; }
        public string? lentTo { get; set; }
        public string? notes { get; set; }
    }
}

