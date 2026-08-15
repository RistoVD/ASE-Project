using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class AppDbContext(DbContextOptions options) : DbContext(options)
{
    public DbSet<AppUser> Users { get; set; }
    public DbSet<Owner> Owners { get; set; }
    public DbSet<Vehicle> Vehicles { get; set; }
}