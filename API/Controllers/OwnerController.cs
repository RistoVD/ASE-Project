using System.ComponentModel.DataAnnotations;
using API.Data;
using API.DTOs;
using API.Entities;
using FxResources.Microsoft;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;
[Route("api/[controller]")]
[ApiController]
public class OwnerController(AppDbContext context) : ControllerBase
{
    [HttpPost("registerOwner")]
    public async Task<ActionResult<Owner>> Register(RegisterOwnerDto registerOwnerDto)
    {
        if (await NameExists(registerOwnerDto.DisplayName)) return BadRequest("Name taken");
        
        var owner = new Owner
        {
            DisplayName = registerOwnerDto.DisplayName,

        };
        context.Owners.Add(owner);
        await context.SaveChangesAsync();
        return owner;
    }
    [HttpGet]
    public async Task<ActionResult<IReadOnlyList<Owner>>> GetOwners()
    {
        var owners = await context.Owners.ToListAsync();

        return owners;
    }

    private async Task<bool> NameExists(string name)
    {
        return await context.Owners.AnyAsync(x => x.DisplayName.ToLower() == name.ToLower());
    }
}