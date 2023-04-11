# Web-systems-coursework

---------------------------Note---------------------------
Instructions for running the server are at the very bottom
----------------------------------------------------------

# Commit nr 1:
initial commit

# Commit nr 2: 
Created a basic gui for the log-in and sign-up on the main page.


# Commit nr 2: 
Minor fixes here and there, adding required imports

# Commit nr 3:
Added functioning and working signup backend allowing for a signup with an name, email and password


# Commit nr 4:
Updated Read.md files as it has some spelling mistakes

# Commit nr 5:
Added authentication to the backend though the signin option

# Commit nr 6:
Resolving minor merge issues

# Commit nr 7:
Added CSS, frontent login and routing

# Commit nr 8:
Fixed backend to use authorisation for deleting/updating users
Added extra fields for the employee schema

# Commit nr 9:
Improved folder structure (more organized), added functionality to create a quote from an authenticated user
Displays all the quotes in our database in the project/view-only-project pages

# Commit nr 10:
Quotes are now displayed from a single component on both project/view-only-project pages

# Commit nr 11:
After creating quote, an ID of their quote is displayed on a page, Delete functionality was added

# Commit nr 12:
Fixed budget not being displayed properly, applied fudge factor, formula for the calculations of the budget is now displayed

# Commit nr 13:
Added styling to the pages which needed it the most, I'm to exausted to continue :(

# Commit nr 14: 
Applied final changes to the budget, separated it into origina which goes into database to be saved and the modified to be displayed.
More css styling to our pages added

# Commit nr 15:
Finished the app, added ne project tab with different collection

# Commit nr 16:
made the backend and frontend run from npm build, added pound sign label to display in budget values

# Commit nr 17
Added more commends on what code does what

# Server running instuctions:

Follow these steps:

1. open terminal from within this directory and type "./run_db.sh" 
2. open another terminal also from this directory and type "./run_web.sh"
3. go to http://localhost:8000/

Alternaitive:

1. execute npm install commands in terminal both on backend and src folders
2. go to src folder and execute npm run build
3. run a database locally from mongodb
4. go to backend and type node index.js, then click on http://localhost:8000/ in terminal