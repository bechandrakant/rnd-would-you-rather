# Would You Rather

Would You Rather is a web app that lets user play the _'Would You Rather?"_ game. The app allows users to
ask and answer questions, see which questions haven't been answered, vote on questions as answers, see what
other people voted, post new questions, and see the ranking of users on the leaderboard.

### Installation

Clone the project onto your local directory and run the following commands from the root directory:

```
$ npm install
$ npm start
```

This website can then be visited on http://localhost:3000

### App functionality

The person using the application has a way of impersonating/logging in as an existing user. Once the user logs in, the home page is shown.

We always want to make sure we know who the logged in user is, so information about the logged in user appears on the page. If someone tries to navigate anywhere by entering the address in the address bar, the user is asked to sign in and then the requested page is shown. The application allows the user to log out and log back in.

Once the user logs in, the user is able to toggle between his/her answered and unanswered polls on the home page, which is located at the root. The polls in both categories are arranged from the most recently created (top) to the least recently created (bottom). The unanswered questions are shown by default, and the name of the logged in user is visible on the page.

What would be the point of seeing answered and unanswered polling questions if we couldn’t actually vote or see the results? Each polling question links to the details of that poll. The details of each poll is available at `questions/:question_id`.

When a poll is clicked on the home page, the following is shown:

1.  Text “Would You Rather”
2.  Avatar of the user who posted the polling question and
3.  Two options.

For answered polls, each of the two options contains the following:

1.  Text of the option
2.  Number of people who voted for that option and
3.  Percentage of people who voted for that option.

The option selected by the logged-in user is clearly marked.

Since we want to make sure our application creates a good user experience, the application shows a 404 page if the user is trying to access a poll that does not exist. (Please keep in mind that newly created polls will not be accessible at their url because of the way the backend is set up in this application.) A navigation bar helos user navigate through the app.

So what happens when someone votes in a poll? Upon voting in a poll, all of the information of an answered poll is displayed. The user’s response is recorded and clearly visible on the poll details page. Users can only vote once per poll they shouldn’t be allowed to change their answer after they’ve voted -- no cheating allowed! When the user comes back to the home page, the polling question appears in the “Answered” column.

It would be no fun to vote in polls if we couldn’t post our own questions! The form for posting new polling questions is available at the `/add` route. The application shows the text “Would You Rather” and has a form for creating two options. Upon submitting the form, a new poll is created, the user is taken to the home page, and the new polling question appears in the correct category on the home page.

But how can we know how many questions each user has asked and answered? The application has a leaderboard that’s available at the `/leaderboard` route. Each entry on the leaderboard contains the following:

1.  User’s name
2.  User’s picture
3.  Number of questions the user asked and
4.  Number of questions the user answered

Users are ordered in descending order based on the sum of the number of questions they’ve asked and the number of questions they’ve answered. The more questions you ask and answer, the higher up you move.

The user is able to navigate to the leaderboard, to a specific question, and to the form that allows the user to create a new poll. To make sure we’re showing the data that is relevant to _the user_, the application requires the user to be signed in order to access those pages.

#### Thanks for visiting.
