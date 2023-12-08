class App
{
    runApplication()
    {
        let title = document.getElementById("NewsTitle");
        console.log(title);
        let RandomGetal = Math.random();

        let NewsItem1 = document.getElementsByClassName("GameNews Headline")[0];
        let NewsItem2 = document.getElementsByClassName("GameNews")[1];

        //begin title random getal//
        if(RandomGetal < 0.2)
        {
            title.style.backgroundColor = '#FF0000'

        }



        else if(RandomGetal > 0.2 && RandomGetal  < 0.6)
        {
            title.style.backgroundColor = '#6699ff'
        }



        else if(RandomGetal > 0.6 && RandomGetal  < 0.75)
        {
            title.style.backgroundColor = '#ff99ff'

        } 
        
        else if(RandomGetal >0.75)
        {
            title.style.backgroundColor = '#66ff99'

        }


        //begin newsitem1 random getal//

        if(RandomGetal < 0.2)
        {
            NewsItem1.style.backgroundColor = '#ffff33'

        }

        else if(RandomGetal > 0.2 && RandomGetal  < 0.6)
        {
            NewsItem1.style.backgroundColor = '#ffcccc'
        }


        else if(RandomGetal > 0.6 && RandomGetal  < 0.75)
        {
            NewsItem1.style.backgroundColor = '#66ffcc'

        }

        else if(RandomGetal >0.75)
        {
            NewsItem1.style.backgroundColor = '#0099ff'

        }
        


        //Begin NewsItem2 random getal//

        if(RandomGetal < 0.2)
        {
            NewsItem2.style.backgroundColor = '#33ccff'

        }

        else if(RandomGetal > 0.2 && RandomGetal  < 0.6)
        {
            NewsItem2.style.backgroundColor = '#8cff1a'
        }


        else if (RandomGetal > 0.6 && RandomGetal  < 0.75)
        {
            NewsItem2.style.backgroundColor = '#ffb366'

        }

        else if(RandomGetal >0.75)
        {
            NewsItem2.style.backgroundColor = '#ffb3ff'

        }


    }
}

let app = new App();
app.runApplication();

