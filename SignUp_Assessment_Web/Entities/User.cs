using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SignUp_Assessment_Web.Entities
{
    public class User : IdentityUser
    {
        [MaxLength(12)]
        public string FirstName { get; set; }
        [MaxLength(16)]
        public string LastName { get; set; }

        public User(string firstName, string lastName)
        {
            FirstName = firstName;
            LastName = lastName;
        }
    }
}
