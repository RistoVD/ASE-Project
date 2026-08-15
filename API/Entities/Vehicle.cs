using System.ComponentModel.DataAnnotations;

namespace API.Entities;

public class Vehicle
{
    public int Id { get; set; } 
    public required string Name { get; set; }
    
    // Navigation property
    public Owner Owner { get; set; } = null!;


}