# Mental Health Reflection Chatbot

This **Mental Health Reflection Chatbot** is a project designed to help users reflect on their mental health through interactive, conversational sessions. By leveraging state-of-the-art Natural Language Processing (NLP) techniques, this chatbot encourages users to explore their emotions, identify their mental state, and provide insights into managing their mental health.

### Why is this Project Important?

Mental health has become a critical aspect of overall well-being, especially in today’s fast-paced world where individuals often find themselves overwhelmed by various challenges. With the rise of mental health awareness, tools that provide easy, accessible, and engaging ways to reflect on and manage mental health are invaluable. This chatbot serves as a gentle guide, offering users a safe space to explore their feelings and gain a better understanding of their mental well-being.

The chatbot not only helps individuals recognize emotional patterns but also encourages healthy reflection practices that can lead to better mental health outcomes. By combining technology with psychological insights, it becomes an effective, non-judgmental resource for those seeking to improve their emotional well-being.

### How It Works

The **Mental Health Reflection Chatbot** is powered by **Rasa**—a robust framework for building conversational AI. It uses **Rasa NLU (Natural Language Understanding)** to interpret user input and **Rasa Core** to manage the flow of conversations. The system is trained on psychological data to recognize common mental health concerns, emotions, and states, which allows it to facilitate meaningful and contextually appropriate conversations.

The chatbot asks users reflective questions about their mental health and provides prompts to help users identify their thoughts and feelings. By using existing psychological research data, the chatbot is trained to support users in reflecting on their mental health in a scientifically grounded manner.

### Project Structure

- **`reflection-chatbot-ui/`**: Contains the React frontend code for user interaction.
- **`nlu.md`**: Defines natural language understanding intents and examples used to train the Rasa NLU model.
- **`stories.md`**: Contains conversation stories to train Rasa Core, shaping how the bot manages dialogues.
- **`config.yml`**: Configuration file for Rasa NLU and Core.
- **`endpoints.yml`**: Configures the endpoints for connecting Rasa actions.

### Setup Instructions

#### Prerequisites

- **Node.js and npm**
- **Python 3.6+**
- **Rasa**: Ensure you have Rasa installed to run the backend.

#### Frontend Setup

1. Navigate to the **`reflection-chatbot-ui`** directory:
    ```sh
    cd reflection-chatbot-ui
    ```

2. Install the necessary dependencies:
    ```sh
    npm install
    ```

3. Start the React development server:
    ```sh
    npm start
    ```

#### Backend Setup

1. Create and activate a Python virtual environment:
    ```sh
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

2. Install the Rasa dependencies:
    ```sh
    pip install rasa
    ```

3. Train the Rasa model:
    ```sh
    rasa train
    ```

4. Start the Rasa action server:
    ```sh
    rasa run actions
    ```

5. Start the Rasa server:
    ```sh
    rasa run
    ```

### Usage

Once the setup is complete, open your browser and navigate to **`http://localhost:3000`** to interact with the chatbot. The chatbot will guide you through reflective questions and help you explore your mental health in a structured and insightful way.

### Project Files

- **`reflection-chatbot-ui/.firebaserc`**: Contains Firebase project configuration for deployment (if applicable).
- **`reflection-chatbot-ui/src/store.js`**: Manages the Redux store for app state.
- **`reflection-chatbot-ui/src/index.js`**: Entry point for the React application.
- **`reflection-chatbot-ui/src/App.js`**: The main React component that manages the conversation flow and app state.
- **`reflection-chatbot-ui/src/index.css` and `reflection-chatbot-ui/src/App.css`**: Styling files for the frontend.
- **`nlu.md`**: Contains intents and training examples for natural language understanding.
- **`stories.md`**: Defines conversation stories for Rasa Core to manage dialogues.
- **`config.yml`**: Configuration file for Rasa NLU and Core.
- **`endpoints.yml`**: Contains Rasa endpoint configurations.

### How the Chatbot Uses Psychological Data

The chatbot leverages **existing psychological data** to better understand and classify the user’s emotional state and mental health concerns. By utilizing curated datasets containing psychological research and insights into common emotional triggers, mental health conditions, and therapeutic techniques, the chatbot is trained to offer responses that are not only contextually relevant but also grounded in psychological science.

This data-driven approach ensures that the chatbot provides valuable insights that align with best practices in mental health care, offering users a healthier and more balanced perspective on their mental well-being.

### License

This project is licensed under the **MIT License**.
