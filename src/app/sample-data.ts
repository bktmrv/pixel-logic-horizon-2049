export default [
  `{
    "name": "John Doe",
    "age": 30,
    "isActive": true,
    "hobbies": ["reading", "gaming", "hiking"],
    "address": {
      "street": "123 Main St",
      "city": "Anytown",
      "postalCode": "12345"
    },
    "projects": [
      {
        "title": "Project A",
        "status": "completed"
      },
      {
        "title": "Project B",
        "status": "in progress"
      }
    ]
  }`,
  `[
    {
      "id": 1,
      "name": "Alice",
      "data": [42, "text", false, null, { "key": "value" }]
    },
    {
      "id": 2,
      "name": "Bob",
      "data": [
        "super duper extra large maxi mega large long string repeated three times. super duper extra large maxi mega large long string repeated three times. super duper extra large maxi mega large long string repeated three times.",
        3.14,
        true
      ]
    }
  ]`,
  `[
    {
      "id": 1,
      "name": "Alice",
      "details": {
        "age": 30,
        "address": {
          "street": "123 Main St",
          "city": "Anytown",
          "coordinates": {
            "latitude": 40.7128,
            "longitude": -74.0060
          }
        },
        "data": [
          42,
          "text",
          false,
          null,
          {
            "key": "value",
            "nestedArray": [
              {
                "item": "item1",
                "attributes": {
                  "color": "red",
                  "size": "large"
                }
              },
              {
                "item": "item2",
                "attributes": {
                  "color": "blue",
                  "size": "medium"
                }
              }
            ]
          }
        ]
      }
    },
    {
      "id": 2,
      "name": "Bob",
      "details": {
        "age": 25,
        "address": {
          "street": "456 Elm St",
          "city": "Othertown",
          "coordinates": {
            "latitude": 34.0522,
            "longitude": -118.2437
          }
        },
        "data": [
          "another string",
          3.14,
          true
        ]
      }
    }
  ]`,
  `{
    "company": {
      "name": "TechCorp",
      "address": {
        "street": "123 Innovation Drive",
        "city": "Techville",
        "state": "CA",
        "postalCode": "94000"
      },
      "departments": [
        {
          "name": "Engineering",
          "manager": {
            "name": "John Doe",
            "email": "johndoe@techcorp.com"
          },
          "teams": [
            {
              "name": "Backend",
              "lead": {
                "name": "Alice Smith",
                "email": "alice@techcorp.com"
              },
              "employees": [
                {
                  "name": "Bob Johnson",
                  "role": "Backend Developer",
                  "contact": {
                    "phone": "+1-555-1234",
                    "email": "bob@techcorp.com"
                  },
                  "skills": [
                    "Python",
                    "Django",
                    "PostgreSQL"
                  ]
                },
                {
                  "name": "Catherine Adams",
                  "role": "Backend Developer",
                  "contact": {
                    "phone": "+1-555-5678",
                    "email": "catherine@techcorp.com"
                  },
                  "skills": [
                    "Go",
                    "Kubernetes",
                    "Microservices"
                  ]
                }
              ]
            },
            {
              "name": "Frontend",
              "lead": {
                "name": "David White",
                "email": "david@techcorp.com"
              },
              "employees": [
                {
                  "name": "Emily Green",
                  "role": "Frontend Developer",
                  "contact": {
                    "phone": "+1-555-7890",
                    "email": "emily@techcorp.com"
                  },
                  "skills": [
                    "React",
                    "JavaScript",
                    "CSS"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "HR",
          "manager": {
            "name": "Fiona Black",
            "email": "fiona@techcorp.com"
          },
          "employees": [
            {
              "name": "George Brown",
              "role": "HR Specialist",
              "contact": {
                "phone": "+1-555-1122",
                "email": "george@techcorp.com"
              }
            }
          ]
        }
      ]
    }
  }`,
]
