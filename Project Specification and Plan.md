# Project Specifications and Plan: Student Note-Taking WebApp

## Overview

The Student Note-Taking WebApp is a Single Page Application designed to help students organize and manage their notes efficiently. The application will have a RESTful backend, using a relational database accessed through an Object-Relational Mapping (ORM). The frontend will be built using React.js, a component-based framework. Users will be able to log in with their institutional accounts, take notes, organize them by classes and activities, add attachments, and collaborate with peers.

## Functionalities

### Authentication

1. **Login with Institutional Account**
   - Users can log in using their institutional email accounts (@stud.ase.ro).

### Note Management

2. **View, Add, Edit, and Delete Notes**
   - Users can perform CRUD operations on their notes, providing flexibility in managing information.

3. **Attachments**
   - Users can attach images and documents to their notes for more comprehensive details.

4. **Organize Notes**
   - Notes can be organized by classes, date, labels (tags), and keywords for easy retrieval.

### Collaboration

5. **Share Notes**
   - Users can share notes with colleagues, fostering collaboration.

6. **Study Groups**
   - Users can organize study groups, inviting multiple colleagues to share notes within the group.

### Content Integration

7. **Integrate Content from External Sources**
   - Users can integrate content from external sources such as YouTube videos, Kindle books, and online conferences.

### Markdown Editor

8. **Easy-to-Use Markdown Editor**
   - The note editor will implement a Markdown system to allow simple text formatting, making it easy for students to take notes during classes.

### Cross-Device Accessibility

9. **Cross-Device Accessibility**
   - The application will be accessible on desktop, mobile, and tablet browsers to cater to user preferences.

## Technical Stack

- **Frontend:** React.js (Component-Based Framework)
- **Backend:** RESTful API
- **Database:** Relational Database (MariaDB)
- **ORM:** Sequelize for Node.js
- **Authentication:** Institutional Email Login
- **Note Editor:** Markdown Supported
- **External Service Integration:** APIs for YouTube, Kindle, etc.

## Project Plan

### Phase 1: Planning and Design

1. **Define Database Schema**
   - Design the relational database schema to store user information, notes, attachments, and collaboration details.

2. ** Set Up Backend**
   - Set up the backend with RESTful API endpoints.

3. **Design Frontend Components**
   - Plan and design React.js components for authentication, note management, collaboration, and content integration.

### Phase 2: Implementation

4. **Backend Development**
   - Implement backend functionality for user authentication, note management, collaboration, and external service integration.

5. **Frontend Development**
   - Develop React.js components and integrate them with the backend API.

6. **Testing**
   - Perform unit testing and integration testing to ensure functionality and data integrity.

### Phase 3: User Experience and Refinement

7. **Implement Markdown Editor**
   - Integrate a Markdown editor into the note-taking interface.

8. **Cross-Device Testing**
   - Ensure cross-device compatibility and responsiveness.

9. **User Acceptance Testing (UAT)**
   - Gather feedback from potential users and make necessary refinements.

### Phase 4: Deployment and Maintenance

10. **Deployment**
    - Deploy the application on a server or cloud platform.

11. **Documentation**
    - Document the usage, API endpoints, and any necessary information for future maintenance.

12. **Monitoring and Updates**
    - Implement monitoring tools and plan for regular updates and maintenance.
