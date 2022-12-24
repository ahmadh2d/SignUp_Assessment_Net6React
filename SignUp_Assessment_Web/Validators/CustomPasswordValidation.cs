using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace SignUp_Assessment_Web.Validators
{
    public class CustomPasswordValidation : ValidationAttribute
    {
        protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
        {
            string passwordValue = value?.ToString()?.Trim() ?? string.Empty;

            if (!string.IsNullOrWhiteSpace(passwordValue))
            {
                if (passwordValue.Length < 8)
                    return new ValidationResult("Password minimum length must be 8.");
                else if (!Regex.IsMatch(passwordValue, @"[A-Z]"))
                    return new ValidationResult("Password must have at least one uppercase character.");
                else if (!Regex.IsMatch(passwordValue, @"[a-z]"))
                    return new ValidationResult("Password must have at least one lowercase character.");
                else if (!Regex.IsMatch(passwordValue, @"[0-9]"))
                    return new ValidationResult("Password must have at least one digit.");
                else if (!Regex.IsMatch(passwordValue, @"[^A-Za-z\d\s]"))
                    return new ValidationResult("Password must have at least one special character.");
            }

            return ValidationResult.Success;
        }
    }
}
