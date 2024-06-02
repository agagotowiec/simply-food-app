const sql = require("better-sqlite3");
const db = sql("meals.db");

const dummyMeals = [
  {
    title: "The ultimate homemade burger",
    slug: "homemade-burger",
    image: "/images/burger.jpg",
    summary: "This ultimate burger recipe is simple and deluxe.",
    ingredients: `
      Ingredients: 
      250g beef mince, 15% fat
      1 level tsp salt
      ground black pepper
      1 brioche burger bun (cut side toasted)
      1 tbsp tomato ketchup
      2 tbsp mayonnaise
      1 gherkin, finely chopped
      ½ small red onion, finely chopped
      2 tbsp freshly chopped dill`,
    instructions: `
      Instructions: 
      1. Tip the mince into a large bowl and break up with a fork. Add the salt and massage with your hands until the mixture is soft and the salt is well incorporated. 
         Cover and leave to stand at room temperature for 25 minutes.

      2. For the sauce, mix ketchup, mayonnaise, gherkin, red onion and dill all together. Set aside.
      
      3. Divide the mince mixture into two equal portions and pat into two thin burgers approximately 12cm/4½in diameter. Use a small bowl or saucer as a guide if you want them to be really neat.
      
      4. Heat a non-stick frying pan over a high heat. Add the burgers and cook for a minute on each side or until browned and cooked through.
      
      5. Serve the burgers and sauce in the toasted bun with the toppings of your choice.
    `,
    author: "Amanda Foodie",
    author_email: "amanda@example.com",
  },
  {
    title: "Easy chicken curry",
    slug: "easy-curry",
    image: "/images/curry.jpg",
    summary:
      "This quick and easy chicken curry is creamy, full of flavour and takes less than half an hour!",
    ingredients: `
      Ingredients: 
      6 spring onions
      3 garlic cloves, finely chopped
      2 tbsp vegetable oil
      half a 400g tin chopped tomatoes
      2 tbsp curry powder
      1 tsp ground ginger
      400g/14oz boneless skinless chicken thigh, cut into 2.5cm/1in pieces
      100ml/3½fl oz Greek-style natural yoghurt, plus extra to serve
      salt and pepper
      200g/7oz long grain rice`,
    instructions: `
      Instructions:
      1. Thinly slice the spring onions, reserving a handful of the sliced green parts for garnish. 
         Heat the oil in a large saucepan over a medium heat and cook the spring onions and garlic for a few minutes.

      2. Add the tomatoes, curry powder and ground ginger and cook for 3-4 minutes. 
         If the pan gets dry add a splash of water and make sure the spices don't burn.

      3. Add the chicken and cook for 5 minutes. Make sure all the chicken is coated and is beginning to brown on the sides.

      4. Add 250ml/9fl oz water and bring to the boil. Reduce to a medium to low heat and cook for 10-15 minutes, 
         or until the chicken is cooked through with no sign of pink juices in the middle of the pieces.

      5. While the chicken is cooking, prepare the rice. Pour the rice into a saucepan and rinse it under 
         the cold tap to take away any cloudy starch. Drain the cloudy water away. Add clean water for cooking the rice. 
         You need almost twice as much water as rice. (If you use a mug of rice, add a little less than two mugs of water). 
         Bring to the boil then reduce the heat to a low simmer.

      6. Cover with a lid and cook very gently for 10 minutes. Remove from the heat and leave to stand with the lid on for 10 minutes. This will finish cooking the rice. 
         Keeping the lid on is important, so none of the steam escapes.

      7. Take the curry off the heat, stir in the yoghurt then season with salt and pepper. 
         Serve the curry with the rice and garnish with a drizzle of yoghurt.
    `,
    author: "John Doe",
    author_email: "johndoe@example.com",
  },
  {
    title: "Homemade Dumplings",
    slug: "homemade-dumplings",
    image: "/images/dumplings.jpg",
    summary:
      "Tender dumplings filled with savory meat and vegetables, steamed to perfection.",
    ingredients: `
      Ingredients: 
      500g 20% fat pork mince
      200g Chinese garlic chives or coriander or Chinese leaf if you can’t find them, finely sliced
      1 ½ tbsp light soy sauce
      1 tbsp oyster sauce
      1 tsp white pepper
      1 tsp sugar
      1½ tsp cornflour
      1 tbsp sesame oil
      40 defrosted pre-made dumpling wrappers
      1 tsp vegetable oil, for frying
      1 tbsp Chinese black vinegar
      1 tsp chilli oil
      ½ tbsp sesame oil
      1 small spring onion, finely sliced`,
    instructions: `
      Instructions:
      1. Tip the pork and chives into a bowl. Add the light soy sauce, oyster sauce, white pepper, 1 tsp salt, the sugar, cornflour and sesame oil, then mix well. Cover and leave to marinate in the fridge for 1 hr. 
         Meanwhile, combine black vinegar, chilli oil, sesame oil and spring onion in a bowl and put in the fridge until needed.

      2. Dipping a finger into cold water, wet the bottom half edges of a dumpling wrapper, then add ½ tbsp of the filling into the centre.

      3. Fold the dumpling from the bottom up and firmly pinch at the middle, then start pleating each side from the right into the centre, firmly pinching as you go. Tuck in the sides and repeat with the left side. Firmly pinch across the top of the dumpling to ensure a tight seal. 
         Repeat to make 40 dumplings.

      4. Bring a large pan of water to boil and cook the dumplings in batches, around 10 at a time. Cook for 3-4 mins until the water starts simmering or the dumplings float to the top. Remove with a slotted spoon and set aside. 
         Repeat until all the dumplings are cooked.

      5. Add a splash of oil to a frying pan and heat on a medium-high heat. Fry the boiled dumplings on each side for 4 mins or until golden brown, then serve with the dumpling sauce either drizzled over or for dipping.
    `,
    author: "Katie Holmes",
    author_email: "katieh@example.com",
  },
  {
    title: "Chicken schnitzel with coleslaw",
    slug: "chicken-schnitzel",
    image: "/images/schnitzel.jpg",
    summary:
      "This tasty German-inspired dish is an easy dinner everyone will love.",
    ingredients: `
      Ingredients: 
      4 small chicken breasts
      3 tbsp grated parmesan
      100g flour
      1 large egg, beaten
      75g dried breadcrumbs (we used panko)
      75ml vegetable oil
      For the coleslaw: 
      300g white cabbage, shredded
      1 large carrot, peeled and grated
      6 spring onions, sliced diagonally
      1 red-skinned apple, grated
      150g pot natural yogurt
      juice ½ lemon
      2 tsp English mustard
   `,
    instructions: `
      Instructions:
      1. For the coleslaw, mix all the ingredients in a large bowl. Season a little and set aside

      2. Place a layer of cling film on your work surface and pop the chicken fillets on top. Cover with another piece of cling film and, using a rolling pin, bash the chicken until it is 2-3mm thick.

      3. Put the flour on a plate and season, then put the egg on another plate. Dip the chicken in the flour to coat, then into the egg.

      4. Mix together the breadcrumbs and Parmesan in a shallow bowl, then toss the chicken in the mixture to completely coat in the crumbs. Put the chicken on a plate and chill in the fridge until ready to eat if you’re not cooking them straight away.

      5. Heat the oil in a large frying pan over a fairly high heat and cook the chicken schnitzels two at a time. Sizzle them for 2-3 mins each side until completely golden, then lift out onto kitchen paper to drain. You can keep them warm in a low oven while you cook the rest. Serve with the coleslaw.
 `,
    author: "Adam Huber",
    author_email: "adamhuber@example.com",
  },
  {
    title: "Macaroni cheese",
    slug: "mac-n-cheese",
    image: "/images/macncheese.jpg",
    summary:
      "Perfect macaroni cheese for a quick family dinner that everyone will love. ",
    ingredients: `
    Ingredients:
    250g/9oz macaroni
    40g/1½oz butter
    40g/1½ plain flour
    600ml/20fl oz milk
    250g/9oz cheddar, grated
    50g/2oz Parmesan (or a similar vegetarian alternative), finely grated`,
    instructions: `
      Instructions:
      1. Cook the macaroni in a large saucepan of boiling salted water for 8 to 10 minutes. Drain well and set aside.

      2. Melt the butter over a medium heat in a saucepan slightly larger than that used for the macaroni. Add the flour and stir to form a roux, cooking for a few minutes.

      3.Gradually whisk in the milk, a little at a time. Cook for 10 to 15 minutes to a thickened and smooth sauce.

      4. Meanwhile, preheat the grill to hot.

      5. Remove the sauce from the hob, add 175g/6oz of the cheddar and stir until it is well combined and melted.

      6. Add the macaroni to the sauce and mix well. Transfer to a deep suitably-sized ovenproof dish.

      7. Sprinkle over the remaining cheddar and the Parmesan and place the dish under the hot grill. Cook until the cheese is browned and bubbling. Serve straightaway.
   `,
    author: "Angelina Smith",
    author_email: "angiesmith@example.com",
  },
  {
    title: "Garden tomato salad",
    slug: "tomato-salad",
    image: "/images/tomato-salad.jpg",
    summary:
      "This simple salad of ripe tomatoes with fragrant herbs and finely diced shallots makes a refreshing side salad or buffet dish.",
    ingredients: `
      Ingredients:
      1.25kg-1.5kg ripe tomatoes - as many colours, shapes, sizes and flavours as you can find
      50g mixed soft herb - we used chives, thyme, parsley and mint
      5-6 shallots, diced as finely as you can
      For the dressing:
      3 tbsp extra virgin olive oil
      3 tbsp white wine vinegar
      1 tbsp clear honey`,
    instructions: `
      Instructions:
      1. Slice the large-to-medium tomatoes and halve the smallest. Pick the leaves from the herbs and roughly chop, then mix the herbs with the shallots.
    
      2. Choose a large platter and start layering up the tomatoes, mixing colours and sizes. As you finish each layer, scatter with some of the herb-shallot mix and some ground black pepper. Keep layering until everything is used up. Cover and chill for a few hrs. Bring to room temperature 45 mins before serving.
    
      3. Whisk together the dressing ingredients with some salt, then drizzle over the salad and serve.
    
      4. Serve:
         Enjoy this simple, flavorful salad as a side dish or light meal.
    `,
    author: "Sophia Green-Garden",
    author_email: "sophiagreen-garden@example.com",
  },
];

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS meals (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       summary TEXT NOT NULL,
       ingredients TEXT NOT NULL,
       instructions TEXT NOT NULL,
       author TEXT NOT NULL,
       author_email TEXT NOT NULL
    )
`
).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO meals VALUES (
         null,
         @slug,
         @title,
         @image,
         @summary,
         @ingredients,
         @instructions,
         @author,
         @author_email
      )
   `);

  for (const meal of dummyMeals) {
    stmt.run(meal);
  }
}

initData();
