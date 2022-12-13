# Seneca Music

Seneca Music is a web app that allows users to discover new release music from Spotify and add their favorite tracks to a list. The app also allows users to search for specific artists and preview their songs.

<img width="1422" alt="Screen Shot 2022-12-12 at 10 18 06 PM" src="https://user-images.githubusercontent.com/58542001/207218176-e2790aa1-d099-4522-a978-f5980f484324.png">

## Technologies Used

Seneca Music is built using Angular and the Spotify Web API.

## Features

- Discover new release music from Spotify
- Add tracks to a list of favorites
- Search for specific artists
- Preview songs

## Installation

To use Seneca Music, clone or download the repository and run `npm install` to install the necessary dependencies. You will also need to create a Spotify developer account and obtain a client ID and client secret to use the Spotify Web API.

Once you have your client ID and client secret, create a file called `env.ts` in the `src/environments` directory and add the following code:

export const environment = {
production: false,
spotifyClientId: 'YOUR_CLIENT_ID',
spotifyClientSecret: 'YOUR_CLIENT_SECRET'
};


Replace `YOUR_CLIENT_ID` and `YOUR_CLIENT_SECRET` with your own client ID and client secret.

To run the app, use the `ng serve` command. The app will be available at `http://localhost:4200/`.

## Contributions

If you find any bugs or have suggestions for improvements, feel free to create an issue or submit a pull request. Contributions are welcome!
