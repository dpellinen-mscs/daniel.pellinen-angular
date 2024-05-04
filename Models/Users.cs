using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using System.ComponentModel.DataAnnotations;
using System.Security.Cryptography.X509Certificates;
using System.ComponentModel.DataAnnotations.Schema;

namespace WideWorld.Models
{
    public class Users
    {
        [Required]
        [Key]
        public int UserId { get; set; }

        [Required]
        [StringLength(100)]
        public string UserName { get; set; }

        [Required]
        [StringLength(50)]
        public string FirstName { get; set; }

        [Required]
        [StringLength(50)]
        public string LastName { get; set; }

        [Required]
        [Column(TypeName = "bit")]
        public bool IsSuperUser { get; set; }

        public int? AffiliateId { get; set; }

        [StringLength(256)]
        public string Email { get; set; }

        [Required]
        [StringLength(128)]
        public string DisplayName { get; set; } 



    }
}