import cauliflower from "../../images/vegtable1.jpg"
import tomato from "../../images/vegtable2.jpeg"
import apple from "../../images/apple.webp"
import banana from "../../images/banana.webp"
import beetroot from "../../images/beetroot.webp"
import ccont from "../../images/biscuit.jpeg"
import bread from "../../images/bread.jpeg"
import butter from "../../images/butter.jpg"
import capsicum from "../../images/capscum.webp"
import carret from "../../images/carret.webp"
import chiken1 from "../../images/cheeken durm.webp"
import chiken2 from "../../images/cheeken.webp"
import egg1 from "../../images/egg1.webp"
import eggs from "../../images/eggs.webp"
import orage from "../../images/fruit1.avif"
import pineapple from "../../images/fruit2.jpg"
import milk from "../../images/milk1.webp"
import mole from "../../images/mole1.jpg"
import oil from "../../images/oil.webp"
import pomegranate from "../../images/pomegranate.webp"
import rice from "../../images/rice.jpeg"
import soap from "../../images/soap.jpeg"
import toast from "../../images/toast.jpeg"



export default [
    {
        id:1,
        name:"Cauliflower",
        image:cauliflower,
        category:"vegetables",
        price:["5/₹ 250g","10/₹ 500g","20/₹ 1kg",]

    },
    {
        id:2,
        name:"Tomato",
        image:tomato,
        category:"vegetables",
        price:["3/₹ 250g","6/₹ 500g","12/₹ 1kg"]

    },
    {
        id:3,
        name:"Apple",
        image:apple,
        category:"fruits",
        price:["12.5/₹ 250g","25/₹ 500g","50/₹ 1kg"]

    },
    {
        id:4,
        name:"Banana",
        image:banana,
        category:"fruits",
        price:["10/₹ 3pc.","20/₹ 6pc.","40/₹ 12pc."]

    },
    {
        id:5,
        name:"Beetroot",
        image:beetroot,
        category:"Vegetables",
        price:["7.5/₹ 250g","15/₹ 500g","30/₹ 1kg"]

    },
    {
        id:6,
        name:"Coconut",
        image:ccont,
        category:"cookies",
        price:["10/₹ 1pc."]

    },
    {
        id:7,
        name:"White Bread",
        image:bread,
        category:"bakry",
        price:["20/₹ 1pc."]

    },
    {
        id:8,
        name:"Butter",
        image:butter,
        category:"milk & juice",
        price:["25/₹ 150g"]

    },
    {
        id:9,
        name:"Green Capsicum ",
        image:capsicum,
        category:"vegetables",
        price:["6.25/₹ 250g","12.5/₹ 500g","25/₹ 1kg"]
    },
    {
        id:10,
        name:"Carrot",
        image:carret,
        category:"vegetables",
        price:["7.5/₹ 250g","15/₹ 500g","30/₹ 1kg"]
    },
      {
        id:11,
        name:"Chicken Drumsticks",
        image:chiken1,
        category:"chicken & eggs",
        price:["62.5/₹ 250g","125/₹ 500g","250/₹ 1kg"]
    }
    , 
     {
        id:12,
        name:"Spencer'S Chicken Boneless",
        image:chiken2,
        category:"chicken & eggs",
        price:["50/₹ 250g","100/₹ 500g","200/₹ 1kg"]
    },
    {
        id:13,
        name:"Total Supreme Eggs 6pc",
        image:egg1,
        category:"chicken & eggs",
        price:["90/₹ 1pc."]
    }
    ,
    {
        id:14,
        name:"Poultry Eggs 6pc",
        image:eggs,
        category:"chicken & eggs",
        price:["60/₹ 1pc."]
    }
    ,
    {
        id:15,
        name:"Orange",
        image:orage,
        category:"fruit",
        price:["20/₹ 250g","40/₹ 500g","80/₹ 1kg"]
    }
    ,
    {
        id:16,
        name:"Pine Apple",
        image:pineapple,
        category:"fruit",
        price:["12.5/₹ 250g","25/₹ 500g","50/₹ 1kg"]
    }
    ,
    {
        id:17,
        name:"Amul Taaza Homogenised Toned Milk",
        image:milk,
        category:"milk & juice",
        price:["20/₹ 1pc."]
    }
    ,
    {
        id:18,
        name:"Mole",
        image:mole,
        category:"grains",
        price:["15/₹ 250g","30/₹ 500g","60/₹ 1kg"]
    }    ,
    {
        id:19,
        name:"Bajaj Almond Drops",
        image:oil,
        category:"oil",
        price:["60/₹ 1pc."]
    }
    ,
    {
        id:20,
        name:"Pomegranate ",
        image:pomegranate,
        category:"fruit",
        price:["37.5/₹ 250g","75/₹ 500g","150/₹ 1kg"]
    }
    ,
    {
        id:21,
        name:"Taj Mahal",
        image:rice,
        category:"grains",
        price:["150/₹ 1kg","400/₹ 5kg","700/₹ 10kg","1250/₹ 25kg"]
    },
    {
        id:22,
        name:"Margo",
        image:soap,
        category:"personal core",
        price:["10/₹ 1pc"]
    },
    {
        id:23,
        name:"Texas Toast",
        image:toast,
        category:"bakery",
        price:["20/₹ 1pc"]
    }
]