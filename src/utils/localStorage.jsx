
const employees = [
  {
      id: "emp1",
      firstName: "Arjun",
      email: "emp1@example.com",
      password: "123",
      taskCounters: {
          active: 3,
          newTask: 4,
          completed: 4,
          failed: 0
      },
      tasks: [
          {
              title: "Fix homepage bug",
              description: "Resolve alignment issue on the homepage.",
              date: "2025-01-27",
              category: "Bug Fix",
              active: true,
              newTask: true,
              completed: false,
              failed: false
          },
          {
              title: "Write API documentation",
              description: "Document the new API endpoints.",
              date: "2025-01-25",
              category: "Documentation",
              active: false,
              newTask: false,
              completed: true,
              failed: false
          },
          {
              title: "Update user profile UI",
              description: "Improve the layout of the user profile page.",
              date: "2025-01-28",
              category: "UI Update",
              active: true,
              newTask: true,
              completed: false,
              failed: false
          },
          {
              title: "Test payment gateway",
              description: "Ensure payment gateway is functioning correctly.",
              date: "2025-01-26",
              category: "Testing",
              active: false,
              newTask: false,
              completed: true,
              failed: false
          },
          {
              title: "Optimize database queries",
              description: "Optimize SQL queries to improve performance.",
              date: "2025-01-29",
              category: "Performance",
              active: true,
              newTask: true,
              completed: false,
              failed: false
          }
      ]
  },
  {
      id: "emp2",
      firstName: "Meera",
      email: "emp2@example.com",
      password: "123",
      taskCounters: {
          active: 2,
          newTask: 3,
          completed: 3,
          failed: 0
      },
      tasks: [
          {
              title: "Prepare presentation",
              description: "Create slides for the quarterly review meeting.",
              date: "2025-01-26",
              category: "Management",
              active: false,
              newTask: false,
              completed: true,
              failed: false
          },
          {
              title: "Fix login error",
              description: "Resolve issue with login page validation.",
              date: "2025-01-27",
              category: "Bug Fix",
              active: true,
              newTask: true,
              completed: false,
              failed: false
          },
          {
              title: "Create test cases",
              description: "Write test cases for the registration feature.",
              date: "2025-01-28",
              category: "Testing",
              active: true,
              newTask: true,
              completed: false,
              failed: false
          },
          {
              title: "Review codebase",
              description: "Review code for upcoming release.",
              date: "2025-01-25",
              category: "Code Review",
              active: false,
              newTask: false,
              completed: true,
              failed: false
          },
          {
              title: "Update dashboard",
              description: "Add analytics section to the dashboard.",
              date: "2025-01-29",
              category: "UI Update",
              active: true,
              newTask: true,
              completed: false,
              failed: false
          }
      ]
  },
  {
      id: "emp3",
      firstName: "Rohan",
      email: "emp3@example.com",
      password: "123",
      taskCounters: {
          active: 4,
          newTask: 1,
          completed: 1,
          failed: 0
      },
      tasks: [
          {
              title: "Design new logo",
              description: "Create a modern logo for the rebranding project.",
              date: "2025-01-27",
              category: "Design",
              active: true,
              newTask: true,
              completed: false,
              failed: false
          },
          {
              title: "Fix security vulnerability",
              description: "Address reported XSS vulnerability.",
              date: "2025-01-25",
              category: "Security",
              active: false,
              newTask: false,
              completed: true,
              failed: false
          },
          {
              title: "Set up CI/CD pipeline",
              description: "Automate deployment process with CI/CD tools.",
              date: "2025-01-28",
              category: "DevOps",
              active: true,
              newTask: true,
              completed: false,
              failed: false
          },
          {
              title: "Conduct user survey",
              description: "Gather feedback from users for upcoming features.",
              date: "2025-01-26",
              category: "Research",
              active: false,
              newTask: false,
              completed: true,
              failed: false
          },
          {
              title: "Write user manual",
              description: "Create a user manual for the product launch.",
              date: "2025-01-29",
              category: "Documentation",
              active: true,
              newTask: true,
              completed: false,
              failed: false
          }
      ]
  },
  {
      id: "emp4",
      firstName: "Ishita",
      email: "emp4@example.com",
      password: "123",
      taskCounters: {
          active: 2,
          newTask: 3,
          completed: 3,
          failed: 0
      },
      tasks: [
          {
              title: "Implement chat feature",
              description: "Add real-time chat functionality.",
              date: "2025-01-27",
              category: "Development",
              active: true,
              newTask: true,
              completed: false,
              failed: false
          },
          {
              title: "Fix image upload bug",
              description: "Resolve image resizing issue during uploads.",
              date: "2025-01-25",
              category: "Bug Fix",
              active: false,
              newTask: false,
              completed: true,
              failed: false
          },
          {
              title: "Enhance accessibility",
              description: "Ensure site is WCAG compliant.",
              date: "2025-01-28",
              category: "UI Update",
              active: true,
              newTask: true,
              completed: false,
              failed: false
          },
          {
              title: "Test notification system",
              description: "Validate email and SMS notifications.",
              date: "2025-01-26",
              category: "Testing",
              active: false,
              newTask: false,
              completed: true,
              failed: false
          },
          {
              title: "Add dark mode",
              description: "Implement dark mode toggle feature.",
              date: "2025-01-29",
              category: "UI Update",
              active: true,
              newTask: true,
              completed: false,
              failed: false
          }
      ]
  },
  {
      id: "emp5",
      firstName: "Kavya",
      email: "emp5@example.com",
      password: "123",
      taskCounters: {
          active: 4,
          newTask: 3,
          completed: 2,
          failed: 0
      },
      tasks: [
          {
              title: "Optimize mobile layout",
              description: "Improve mobile responsiveness for all pages.",
              date: "2025-01-27",
              category: "UI Update",
              active: true,
              newTask: true,
              completed: false,
              failed: false
          },
          {
              title: "Fix caching issue",
              description: "Resolve cache invalidation problems.",
              date: "2025-01-25",
              category: "Bug Fix",
              active: false,
              newTask: false,
              completed: true,
              failed: false
          },
          {
              title: "Add multilingual support",
              description: "Support multiple languages in the application.",
              date: "2025-01-28",
              category: "Development",
              active: true,
              newTask: true,
              completed: false,
              failed: false
          },
          {
              title: "Review design proposals",
              description: "Evaluate submitted designs for the new homepage.",
              date: "2025-01-26",
              category: "Design",
              active: false,
              newTask: false,
              completed: true,
              failed: false
          },
          {
              title: "Implement search filters",
              description: "Add advanced search filters for users.",
              date: "2025-01-29",
              category: "Development",
              active: true,
              newTask: true,
              completed: false,
              failed: false
          }
      ]
  }
];
  
const admin =[
    {
    "id": "admin1",
    "email": "admin1@example.com",
    "password": "123"
    }
] 
  
export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    
    return{employees, admin}
}
