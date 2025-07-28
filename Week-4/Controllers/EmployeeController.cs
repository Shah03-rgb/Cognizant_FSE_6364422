using EmployeeApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeApi.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    // [ServiceFilter(typeof(CustomAuthFilter))]

    public class EmployeeController : ControllerBase {
        private List<Employee> GetStandardEmployeeList() {
            return new List<Employee> {
            new Employee { Id = 1, Name = "John", Salary = 50000, Permanent = true,
                    Department = new Department { Id = 1, Name = "HR" },
                    Skills = new List<Skill> { new Skill { Id = 1, Name = "C#" } },
                    DateOfBirth = DateTime.Now.AddYears(-30)
                }
            };
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public ActionResult<List<Employee>> Get() {
            return GetStandardEmployeeList();
        }

        [HttpPut]
        public ActionResult<Employee> Put([FromBody] Employee emp) {
            if (emp.Id <= 0)
                return BadRequest("Invalid employee id");

            var employees = GetStandardEmployeeList();
            var existing = employees.FirstOrDefault(e => e.Id == emp.Id);
            // Console.WriteLine(existing);

            if (existing == null)
                return BadRequest("Invalid employee id");

            existing.Name = emp.Name;
            return Ok(existing);
        }
    }
}
