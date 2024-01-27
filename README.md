# TrackIT - Web-Based Accountability System

![TrackIT Logo](./src/favicon.ico)

TrackIT is a comprehensive web-based accountability system designed to help you gain control over your finances by tracking your income and expenses. The primary goal of TrackIT is to prevent excessive spending and promote financial responsibility.

## Features

- **User-Friendly Interface**: TrackIT provides an intuitive and easy-to-use interface for efficient financial tracking.

- **Income and Expense Tracking**: Log your income and expenses seamlessly to maintain a real-time overview of your financial status.

- **Visualizations**: Gain insights into your spending habits through interactive charts and graphs to identify areas for improvement.

- **Budget Management**: Set budgets for different expense categories and receive alerts when nearing or exceeding the limits.

- **Secure Authentication**: Protect your financial data with secure authentication methods, ensuring your information remains confidential.

## Technologies Used

- [**Frontend**](https://github.com/blessedmadukoma/trackit-client.git): NextJS and TailwindCSS were used to develop the responsive and dynamic user interface.

- [**Backend**](https://github.com/blessedmadukoma/trackit-backend): The backend is powered by Go and uses PostgreSQL as the database for efficient data storage.

- **Deployment**: The application is deployed on [Vercel](vercel.com) for the frontend and [Koyeb](koyeb.com) for the backend, providing a fast and reliable user experience.

## Live Demo

Experience TrackIT in action by visiting [https://trakkit.vercel.app](https://trakkit.vercel.app).

## Installation

To run TrackIT locally, follow these steps:

1. Clone the repositories: 
  - Frontend: `git clone https://github.com/blessedmadukoma/trackit-client.git`
  - Backend: `git clone https://github.com/blessedmadukoma/trackit-backend.git`

2. Install dependencies:
    - Frontend
        1. Navigate to the frontend folder: `cd trackit-client`
        2. Install dependencies: `npm install`
    - Backend
        1. Navigate to the backend folder: `cd trackit-backend`
        2. Install dependencies: `go get -u`

3. Set your environmental variable by copying `.env.example` to `.env`.

4. Start the backend server: `go run main.go`

5. Run the frontend development server: `npm run dev`

6.  Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## Core Backend Features

- **User Authentication and Authorization**: Securely manage user access with authentication and authorization mechanisms.

- **Budget Creation**: Allow users to create budgets for different expense categories to manage their spending.

- **Income and Expenses Management**: Enable users to add and manage their income and expenses with validation for accuracy.

## Contributing

We welcome contributions from the community. Feel free to open issues, submit pull requests, or provide feedback to help us improve TrackIT.

## License

TrackIT is licensed under the [MIT License](LICENSE).

## Contact

For inquiries or support, please contact [me](mailto:blessedmadukoma@gmail.com)

---

Thank you for choosing TrackIT! We believe in promoting financial accountability for a brighter financial future.