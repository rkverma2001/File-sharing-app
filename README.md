# Dynamic File Share - Flexible File Sharing Platform

Dynamic File Share is a versatile file-sharing backend designed to provide a seamless and secure experience for users. The system supports dynamic UUIDs in its endpoints, allowing users to upload files, generate download links, and share files effortlessly. With robust security measures and flexibility in UUID usage, Dynamic File Share caters to a wide range of file-sharing scenarios.

## Key Features

### Dynamic UUIDs
- **Unique UUID Generation**: Each file uploaded generates a unique UUID, ensuring secure and personalized file management.
- **Customizable Links**: Dynamic UUIDs enable flexible and customizable download links.

### File Uploads
- **Simple API Endpoint**: Users can upload files through a straightforward API endpoint.
- **Secure Storage**: Uploaded files are securely stored on the server or seamlessly integrated with cloud storage solutions.

### Dynamic Download Link Generation
- **Personalized Links**: The system dynamically generates download links based on UUIDs, providing users with a personalized link for each uploaded file.
- **Configurable Expiration**: Download links are time-sensitive and can be configured for expiration to enhance security.

### Secure Downloading
- **Encrypted Connections**: Secure file downloading is facilitated through encrypted connections and robust authentication measures.
- **Confident Sharing**: Users can confidently download files without compromising security.

### Email Notifications
- **Convenient Sharing**: An API endpoint allows users to send download links via email, enhancing the ease of sharing files.
- **Direct From Application**: Users can share files conveniently by sending dynamic download links directly from the application.

## Technology Stack

### Backend
- **Node.js**: Server-side development.
- **Express.js**: Building RESTful APIs.
- **Multer**: Handling file uploads.
- **MongoDB**: Storing file metadata.
- **Mongoose**: MongoDB interactions.

## API Endpoints

### Upload a File
- **Endpoint**: `POST http://localhost:8080/api/files/`
- **Description**: Upload a file and dynamically generate a UUID.

### Get a Dynamic Download Link
- **Endpoint**: `GET http://localhost:8080/files/:uuid`
- **Description**: Get a dynamic download link for the file with the specified UUID.

### Download a File
- **Endpoint**: `GET http://localhost:8080/files/download/:uuid`
- **Description**: Download a file based on the dynamic UUID.

### Send an Email with Download Link
- **Endpoint**: `POST http://localhost:8080/api/files/send`
- **Description**: Send an email containing a dynamic download link.

## Installation

To set up the Dynamic File Share platform locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/dynamic-file-share.git
    cd dynamic-file-share
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
    Create a `.env` file in the root directory and configure the necessary environment variables.
    ```env
    PORT=8080
    MONGODB_URI=your_mongodb_uri
    EMAIL_SERVICE=your_email_service
    EMAIL_USER=your_email_user
    EMAIL_PASS=your_email_password
    ```

4. **Run the server**:
    ```bash
    npm start
    ```

5. **API Documentation**:
    Visit `http://localhost:8080/api-docs` for detailed API documentation.

## Usage

1. **Upload a File**:
    ```bash
    curl -X POST -F 'file=@/path/to/your/file' http://localhost:8080/api/files/
    ```

2. **Get a Download Link**:
    ```bash
    curl http://localhost:8080/files/:uuid
    ```

3. **Download a File**:
    ```bash
    curl http://localhost:8080/files/download/:uuid
    ```

4. **Send an Email with a Download Link**:
    ```bash
    curl -X POST -H "Content-Type: application/json" -d '{"email": "recipient@example.com", "uuid": "file_uuid"}' http://localhost:8080/api/files/send
    ```

## Contributing

We welcome contributions to improve Dynamic File Share. Please fork the repository and submit pull requests.

1. **Fork the repository**.
2. **Create a new branch**:
    ```bash
    git checkout -b feature/your-feature-name
    ```

3. **Make your changes** and commit them:
    ```bash
    git commit -m 'Add some feature'
    ```

4. **Push to the branch**:
    ```bash
    git push origin feature/your-feature-name
    ```

5. **Submit a pull request**.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For any inquiries or feedback, please contact us at [support@example.com](mailto:support@example.com).

---

Enjoy using Dynamic File Share! 🎉