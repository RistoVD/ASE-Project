using System.ComponentModel.DataAnnotations;

namespace API.DTOs;

public class RegisterOwnerDto
{
    [Required]
    [MinLength(4)]
    public required string DisplayName { get; set; } ="";
}