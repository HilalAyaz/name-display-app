# NameDisplay React Component

The `NameDisplay` component is a part of a web application that allows users to change their name in the URL and updates the displayed name in real-time as the user types.

## Import Statements

- `React`, `useState`, and `useEffect` are imported from the 'react' library.
- `useParams` and `useNavigate` are imported from 'react-router-dom'.
- `Container`, `Form`, and `Button` are imported from 'react-bootstrap'.

## Component Definition

The `NameDisplay` component is defined as a functional component, following modern React patterns. It leverages React hooks like `useState` and `useEffect` for state management and side effects.

## Hook Usage

- It uses the `useParams` hook to get the value of the 'name' parameter from the URL.
- It uses the `useNavigate` hook to obtain a navigation function for updating the URL.

## State Management

It uses the `useState` hook to manage the `inputName` state, which is initially set to an empty string. This state represents the user's name.

## useEffect

The component uses the `useEffect` hook to update the `inputName` state whenever the 'name' parameter in the URL changes, ensuring that the displayed name always reflects the URL parameter.

## Event Handling

- It defines a `handleNameChange` function to handle changes in the input field. This function updates the `inputName` state based on user input.
- It defines an `updateNameInUrl` function that uses the `navigate` function to update the URL with the new name entered in the input field, providing a seamless user experience.

## Render

The component renders a user-friendly interface:

- A header with a title: "Change Your Name in the URL."
- A main section enclosed in a styled `Container` component from 'react-bootstrap.'
- A greeting message that addresses the user by their name (defaulting to "Stranger" if no name is provided in the URL).
- An input field for entering a new name.
- A button to update the name in the URL.

## Styling

Styling is applied to the components using inline CSS. This includes customizations to font size, background color, and border for a visually pleasing user interface.

This component is a versatile addition to a web application, offering a simple and engaging way for users to personalize their experience by changing their name in the URL.
