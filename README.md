# News-Anchor-Chrom-Ext
A chrome extension to keep you updated with latest news. It uses google News API to fetch latest news.

It has search functionality to search related news as per input.

![](Screenshot%202020-04-13%20at%2012.58.55%20PM.png)

Tech Stack:

1. Html
2. CSS
3. JS

To add it as a chrome extension in your browser:
1. Pull the code.
2. Generate a Google NEWS API key from here https://newsapi.org/s/google-news-api.
3. Open popup.js file and replace ENTER_API_KEY in below code with your generated API key.

   ```
    const latest_indian_news = "https://newsapi.org/v2/everything?q=todays+latest+india+news&apiKey=ENTER_GOOGLE_API_KEY";

    const query_search_news = "https://newsapi.org/v2/everything?q=query&apiKey=ENTER_GOOGLE_API_KEY";
    ```
    
 4. Open Chrome Extension
 5. Select(Turn On) Developer Mode available at right corner.
 6. Then select Load Unpacked and select your folder.
 7. There you go, now you've your own chrome extension :)


Upcoming:
- Save the news in local browser to avoid calling the api redundantly
- Add image of every news.
- Auto move read news to bottom.
- A home page so that everyone can feed there own google API key to get 500 requests per day.

If this was any helpful, please rate it.

You can reach out to me at kumarshubham149@gmail.com for any queries.
