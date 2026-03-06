export const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "Calendar API",
    version: "1.0.0",
    description: "API for managing user authentication and calendar tasks",
  },
  servers: [
    {
      url:
        process.env.NODE_ENV === "production"
          ? "https://calendar-tau-green.vercel.app/api"
          : "http://localhost:5000/api",
      description: "Main Server",
    },
  ],
  components: {
    securitySchemes: {
      cookieAuth: {
        type: "apiKey",
        in: "cookie",
        name: "token",
        description: "JWT token stored in HttpOnly cookie",
      },
    },
    schemas: {
      User: {
        type: "object",
        properties: {
          id: { type: "string", example: "60d0fe4f5311236168a109ca" },
          email: { type: "string", example: "user@example.com" },
          name: { type: "string", example: "John Doe" },
        },
      },
      Task: {
        type: "object",
        properties: {
          _id: { type: "string" },
          title: { type: "string", example: "Meeting with team" },
          date: { type: "string", format: "date-time" },
          labels: {
            type: "array",
            items: { type: "string" },
            example: ["work", "urgent"],
          },
          order: { type: "number", example: 0 },
          userId: { type: "string" },
        },
      },
      Error: {
        type: "object",
        properties: {
          message: { type: "string", example: "Error message description" },
        },
      },
    },
  },
  paths: {
    "/auth/register": {
      post: {
        tags: ["Authentication"],
        summary: "Register a new user",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["email", "password"],
                properties: {
                  email: { type: "string" },
                  password: { type: "string" },
                  name: { type: "string" },
                },
              },
            },
          },
        },
        responses: {
          201: { description: "User created successfully" },
          400: {
            description: "Validation error or email already taken",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Error" },
              },
            },
          },
          500: { description: "Internal server error" },
        },
      },
    },
    "/auth/login": {
      post: {
        tags: ["Authentication"],
        summary: "Login to the system",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["email", "password"],
                properties: {
                  email: { type: "string" },
                  password: { type: "string" },
                },
              },
            },
          },
        },
        responses: {
          200: { description: "Successful login, sets HttpOnly cookie" },
          400: { description: "Invalid credentials" },
          404: { description: "User not found" },
        },
      },
    },
    "/auth/logout": {
      post: {
        tags: ["Authentication"],
        summary: "Logout user",
        security: [{ cookieAuth: [] }],
        responses: {
          200: { description: "Cookie cleared successfully" },
        },
      },
    },
    "/auth/profile": {
      get: {
        tags: ["Authentication"],
        summary: "Get current user profile",
        security: [{ cookieAuth: [] }],
        responses: {
          200: {
            description: "Returns user data",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/User" },
              },
            },
          },
          401: { description: "Unauthorized" },
        },
      },
    },
    "/tasks": {
      get: {
        tags: ["Tasks"],
        summary: "Get all user tasks",
        security: [{ cookieAuth: [] }],
        parameters: [
          {
            name: "year",
            in: "query",
            schema: { type: "string" },
            description: "Filter by year",
          },
          {
            name: "month",
            in: "query",
            schema: { type: "string" },
            description: "Filter by month (1-12)",
          },
        ],
        responses: {
          200: {
            description: "List of tasks retrieved successfully",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: { $ref: "#/components/schemas/Task" },
                },
              },
            },
          },
          401: { description: "Unauthorized" },
        },
      },
      post: {
        tags: ["Tasks"],
        summary: "Create a new task",
        security: [{ cookieAuth: [] }],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["title", "date"],
                properties: {
                  title: { type: "string" },
                  date: { type: "string", format: "date-time" },
                  labels: { type: "array", items: { type: "string" } },
                },
              },
            },
          },
        },
        responses: {
          201: {
            description: "Task created successfully",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Task" },
              },
            },
          },
          500: { description: "Database error" },
        },
      },
    },
    "/tasks/{id}": {
      patch: {
        tags: ["Tasks"],
        summary: "Update an existing task",
        security: [{ cookieAuth: [] }],
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "string" },
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  title: { type: "string" },
                  date: { type: "string", format: "date-time" },
                  labels: { type: "array", items: { type: "string" } },
                  order: { type: "number" },
                },
              },
            },
          },
        },
        responses: {
          200: { description: "Task updated successfully" },
          404: { description: "Task not found or access denied" },
        },
      },
      delete: {
        tags: ["Tasks"],
        summary: "Delete a task",
        security: [{ cookieAuth: [] }],
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "string" },
          },
        ],
        responses: {
          200: { description: "Task deleted successfully" },
          404: { description: "Task not found" },
        },
      },
    },
  },
};
