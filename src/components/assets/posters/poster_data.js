// Imports for Movie Posters
import p1_img from './Dark Knight Archetypes.jpg';
import p2_img from './Interstellar.jpg';
import p3_img from './Dune_ Part Two Poster.jpg';
import p4_img from './Kgf chapter two ending scene.jpg';
import p5_img from './django.jpg';
import p6_img from './johnwick.jpg';
import p7_img from './pulp fiction.jpg';
import p8_img from './social network poster.jpg';
import p9_img from './tenet.jpg';
import p10_img from './the_shawshank_redemption.jpg';
import p11_img from './three_idiots.jpg';
import p12_img from './Animal Ranbir Kapoor.jpg';

// Imports for Artist Posters
import p13_img from './50_cent.jpg';
import p14_img from './ASAP Rocky.jpg';
import p15_img from './Big Dawgs - HanumanKind.jpg';
import p16_img from './Hans Zimmer Poster.jpg';
import p17_img from './lana del rey.jpg';
import p18_img from './The Weeknd After Hours Poster Cover.jpg';
import p19_img from './Travis Scott Poster.jpg';
import p20_img from './dr dre.jpg';
import p21_img from './drake.jpg';
import p22_img from './eminem.jpg';
import p23_img from './kanye.jpg';
import p24_img from './Kendrick_Lamar_Poster.jpg';

// Imports for Superhero Posters
import p25_img from './Avengers.jpg';
import p26_img from './Batman v Superman - Fear the Bat Wall Poster.jpg';
import p27_img from './Justice League Illustrated Poster.jpg';
import p28_img from './The Dark Side of the Peacemaker.jpg';
import p29_img from './Trends International Marvel Loki-What Did You Expect Wall Poster.jpg';
import p30_img from './_moon knight moon knight moon knight moon khonshu.jpg';
import p31_img from './batman_poster.jpg';
import p32_img from './flash.jpg';
import p33_img from './gambit.jpg';
import p34_img from './magneto.jpg';
import p35_img from './the_boys.jpg';
import p36_img from './thor_ragnarok.jpg';


import p41_img from './blackpathter.jpg'
import p42_img from './ford vs ferrari.jpg'
import p43_img from './man of steel.jpg'
import p44_img from './The Dictator (2012).jpg'
import p45_img from './Whiplash.jpg'
import p46_img from './rocky.jpg'
import p47_img from './nissan skyline.jpg'
import p48_img from './porsche.jpg'

import p49_img from './fastandfurioustokyodrift.jpg'
import p50_img from './porsche911.jpg'
import p51_img from './theweeknd.jpg'
import p52_img from './lana.jpg'
import p53_img from './hugh.jpg'

// Product List
const products = [
  { id: 1, name: "The Social Network", category: "movie", image: p8_img, new_price: 219.00, old_price: 619.00, description: "The Social Network chronicles the tumultuous beginnings of Facebook and the interpersonal conflicts that arise among its founders, depicting the intense competition and legal battles that shaped the social media landscape.", reviews: 120, stars: 4 },
  { id: 2, name: "John Wick", category: "movie", image: p6_img, new_price: 199.00, old_price: 599.00, description: "John Wick follows an ex-hitman who is drawn back into the criminal underworld when gangsters take everything from him, including his beloved dog. This action-packed film explores themes of vengeance and loyalty, showcasing intense fight choreography and world-building.", reviews: 150, stars: 5 },
  { id: 3, name: "Interstellar", category: "movie", image: p2_img, new_price: 229.00, old_price: 629.00, description: "Interstellar is a visually stunning science fiction film that explores deep emotional themes while following a group of astronauts on a quest through a wormhole in search of a new home for humanity, blending scientific concepts with heartfelt storytelling.", reviews: 180, stars: 5 },
  { id: 4, name: "Dune: Part Two", category: "movie", image: p3_img, new_price: 299.00, old_price: 699.00, description: "Dune: Part Two continues the epic tale of Paul Atreides as he unites with Chani and the Fremen against the conspirators who destroyed his family, set against the backdrop of the desert planet Arrakis, emphasizing themes of destiny, power, and survival.", reviews: 200, stars: 4 },
  { id: 5, name: "KGF Chapter Two", category: "movie", image: p4_img, new_price: 259.00, old_price: 659.00, description: "KGF Chapter Two follows Rocky as he battles formidable foes to control the KGF, highlighting intense power struggles, complex relationships, and the protagonist's relentless pursuit of power in a world filled with betrayal and ambition.", reviews: 130, stars: 4 },
  { id: 6, name: "Th Dark Knight", category: "movie", image: p1_img, new_price: 249.00, old_price: 649.00, description: "The Dark Knight presents Batman's confrontation with the Joker, a criminal mastermind who seeks to bring chaos to Gotham City. The film delves into the complexities of heroism and morality, making it one of the most acclaimed superhero films of all time.", reviews: 250, stars: 5 },
  { id: 7, name: "Pulp Fiction", category: "movie", image: p7_img, new_price: 249.00, old_price: 649.00, description: "Pulp Fiction intertwines the stories of mob hitmen, a boxer, and a gangster's wife through a series of violent and redemptive encounters, celebrated for its non-linear narrative and iconic dialogue, establishing a cultural landmark in cinema.", reviews: 300, stars: 5 },
  { id: 8, name: "Django Unchained", category: "movie", image: p5_img, new_price: 199.00, old_price: 599.00, description: "Django Unchained tells the story of a freed slave who embarks on a mission to rescue his wife from a cruel plantation owner, blending action with poignant social commentary and showcasing Tarantino's signature storytelling style.", reviews: 210, stars: 4 },
  { id: 9, name: "Tenet", category: "movie", image: p9_img, new_price: 239.00, old_price: 639.00, description: "Tenet is a complex and thrilling narrative about a secret agent who is armed with only one word—Tenet—and is fighting for the survival of the world as he journeys through a twilight world of international espionage on a mission that will unfold in reverse.", reviews: 190, stars: 3 },
  { id: 10, name: "Shawshank Redemption", category: "movie", image: p10_img, new_price: 279.00, old_price: 679.00, description: "The Shawshank Redemption tells the story of two imprisoned men who bond over several years, finding solace and redemption through acts of common decency, and is widely regarded as one of the greatest films ever made.", reviews: 400, stars: 5 },
  { id: 11, name: "Three Idiots", category: "movie", image: p11_img, new_price: 209.00, old_price: 609.00, description: "Three Idiots is a heartwarming tale of three engineering students in India who embark on a quest to find their missing friend while discovering the true meaning of education and friendship in a competitive academic environment.", reviews: 270, stars: 4 },
  { id: 12, name: "Animal", category: "movie", image: p12_img, new_price: 299.00, old_price: 699.00, description: "Animal is a gripping narrative exploring the complexities of a father-son relationship amidst chaos, highlighting themes of love, loyalty, and sacrifice in a turbulent world.", reviews: 160, stars: 4 },
  
  { id: 13, name: "50 Cent", category: "artist", image: p13_img, new_price: 189.00, old_price: 589.00, description: "50 Cent is an iconic American rapper whose career skyrocketed with hits like 'In Da Club'. He is also known for his savvy business ventures and influence in hip-hop culture.", reviews: 80, stars: 3 },
  { id: 14, name: "ASAP Rocky", category: "artist", image: p14_img, new_price: 199.00, old_price: 599.00, description: "ASAP Rocky is an innovative American rapper whose unique style merges hip hop with high fashion, earning him critical acclaim and a dedicated fanbase.", reviews: 90, stars: 4 },
  { id: 15, name: "Lana Del Rey", category: "artist", image: p17_img, new_price: 189.00, old_price: 589.00, description: "Lana Del Rey captivates audiences with her cinematic music style and nostalgic Americana themes, often exploring the complexities of love and loss.", reviews: 85, stars: 4 },
  { id: 16, name: "Hans Zimmer", category: "artist", image: p16_img, new_price: 249.00, old_price: 649.00, description: "Hans Zimmer is a legendary composer known for his exceptional film scores, including those for 'Inception' and 'The Lion King', blending classical elements with modern techniques.", reviews: 100, stars: 5 },
  { id: 17, name: "HanumanKind", category: "artist", image: p15_img, new_price: 229.00, old_price: 629.00, description: "HanumanKind is a popular artist recognized for their unique sound that blends traditional and contemporary music styles, creating an innovative listening experience.", reviews: 75, stars: 3 },
  { id: 18, name: "The Weeknd", category: "artist", image: p18_img, new_price: 219.00, old_price: 619.00, description: "The Weeknd is a Grammy-winning artist celebrated for his smooth vocals and innovative sound, with chart-topping hits that push the boundaries of contemporary R&B.", reviews: 110, stars: 5 },
  { id: 19, name: "Travis Scott", category: "artist", image: p19_img, new_price: 239.00, old_price: 639.00, description: "Travis Scott is a dynamic American rapper known for his unique musical style and energetic performances, making a significant impact on the music industry.", reviews: 95, stars: 4 },
  { id: 20, name: "Dr. Dre", category: "artist", image: p20_img, new_price: 259.00, old_price: 659.00, description: "Dr. Dre is a legendary figure in hip hop known for his groundbreaking work as a producer and rapper, influencing countless artists and founding the renowned Beats by Dre.", reviews: 120, stars: 5 },
  { id: 21, name: "Drake", category: "artist", image: p21_img, new_price: 279.00, old_price: 679.00, description: "Drake is an award-winning rapper who seamlessly blends rap and R&B, known for his extensive catalog of chart-topping hits and impactful lyrics.", reviews: 150, stars: 4 },
  { id: 22, name: "Eminem", category: "artist", image: p22_img, new_price: 209.00, old_price: 609.00, description: "Eminem, one of the best-selling artists in history, is celebrated for his intricate lyrics and powerful storytelling, making a profound impact on hip-hop and pop culture.", reviews: 160, stars: 5 },
  { id: 23, name: "Kanye West", category: "artist", image: p23_img, new_price: 249.00, old_price: 649.00, description: "Kanye West is a multifaceted artist known for his innovative music, influential fashion, and thought-provoking commentary on culture and society.", reviews: 150, stars: 4 },
  { id: 24, name: "Kendrick Lamar", category: "artist", image: p24_img, new_price: 269.00, old_price: 669.00, description: "Acclaimed rapper known for his insightful lyrics and storytelling, often addressing social issues.", reviews: 300, stars: 5 },
  
  { id: 25, name: "Avengers", category: "superhero", image: p25_img, new_price: 239.00, old_price: 639.00, description: "The ultimate superhero team saves the world from powerful threats, combining unique abilities and teamwork to battle villains and protect humanity.", reviews: 150, stars: 4 },    
  { id: 26, name: "Batman v Superman", category: "superhero", image: p26_img, new_price: 189.00, old_price: 589.00, description: "Two iconic heroes face off in an epic showdown that tests their ideologies, questioning the morality of vigilantism and the greater good.", reviews: 170, stars: 3 },   
  { id: 27, name: "Justice League", category: "superhero", image: p27_img, new_price: 259.00, old_price: 659.00, description: "A team of superheroes unites to save the world from dark forces, highlighting the importance of friendship and sacrifice in the face of overwhelming odds.", reviews: 160, stars: 4 },    
  { id: 28, name: "Peacemaker", category: "superhero", image: p28_img, new_price: 229.00, old_price: 629.00, description: "A super soldier must save the day despite his violent tendencies and controversial methods, exploring the complexities of morality and heroism.", reviews: 180, stars: 4 },    
  { id: 29, name: "Marvel Loki", category: "superhero", image: p29_img, new_price: 249.00, old_price: 649.00, description: "The God of Mischief navigates alternate realities and faces new challenges in a battle for power, with themes of identity and redemption.", reviews: 190, stars: 5 },    
  { id: 30, name: "Moonkinght", category: "superhero", image: p30_img, new_price: 299.00, old_price: 699.00, description: "Steven Grant and mercenary Marc Spector investigate the mysteries of the Egyptian gods from inside the same body.", reviews: 200, stars: 5 },   
  { id: 31, name: "The Batman", category: "superhero", image: p31_img, new_price: 219.00, old_price: 619.00, description: "Batman is called to intervene when the mayor of Gotham City is murdered. Soon, his investigation leads him to uncover a web of corruption, linked to his own dark past.", reviews: 140, stars: 4 },    
  { id: 32, name: "The Flash", category: "superhero", image: p32_img, new_price: 209.00, old_price: 609.00, description: "Barry Allen races to save his city with super-speed, navigating time and personal challenges, showcasing his determination and resilience.", reviews: 130, stars: 4 },   
  { id: 33, name: "Gambit", category: "superhero", image: p33_img, new_price: 259.00, old_price: 659.00, description: "Known as the Ragin' Cajun, Gambit is one of the foremost professional thieves in the world and becomes one of the X-Men’s most powerful weapons.", reviews: 220, stars: 5 },    
  { id: 34, name: "Magneto", category: "superhero", image: p34_img, new_price: 279.00, old_price: 679.00, description: "A powerful mutant with the ability to control magnetic fields, Magneto's complex character navigates the thin line between hero and villain, driven by his past.", reviews: 150, stars: 4 },    
  { id: 35, name: "The Boys", category: "superhero", image: p35_img, new_price: 209.00, old_price: 609.00, description: "A gritty take on the superhero genre, exposing the dark side of heroes who are more concerned with their image than doing good, challenging societal norms.", reviews: 175, stars: 4 },    
  { id: 36, name: "Thor Ragnarok", category: "superhero", image: p36_img, new_price: 299.00, old_price: 699.00, description: "Thor must escape the alien planet Sakaar in time to save Asgard from Hela and prevent Ragnarok, blending humor and action with powerful themes of family and destiny.", reviews: 190, stars: 5 },
    

  { id: 41, name: "Black Panther Metal Poster", image: p41_img, category: "popular", new_price: 199, old_price: 499, description: "A stunning metal poster featuring Black Panther, perfect for Marvel fans.", reviews: 120, stars: 4 },
  { id: 42, name: "Ford vs Ferrari Metal Poster", image: p42_img, category: "popular", new_price: 229, old_price: 529, description: "A stylish metal poster celebrating the classic 'Ford vs Ferrari' film.", reviews: 95, stars: 4 },
  { id: 43, name: "Man of Steel Metal Poster", image: p43_img, category: "popular", new_price: 209, old_price: 499, description: "A powerful depiction of Superman from 'Man of Steel,' ideal for DC fans.", reviews: 88, stars: 5 },
  { id: 44, name: "The Dictator (2012) Metal Poster", image: p44_img, category: "popular", new_price: 189, old_price: 459, description: "A humorous metal poster inspired by the classic comedy 'The Dictator'.", reviews: 60, stars: 3 },
  { id: 45, name: "Whiplash Metal Poster", image: p45_img, category: "popular", new_price: 239, old_price: 599, description: "A dramatic poster from the award-winning movie 'Whiplash', a must for movie buffs.", reviews: 110, stars: 5 },
  { id: 46, name: "Rocky Metal Poster", image: p46_img, category: "popular", new_price: 199, old_price: 499, description: "An iconic 'Rocky' poster, a tribute to one of the greatest boxing films of all time.", reviews: 130, stars: 4 },
  { id: 47, name: "Nissan Skyline Metal Poster", image: p47_img, category: "popular", new_price: 249, old_price: 599, description: "A sleek metal poster featuring the legendary Nissan Skyline, perfect for car enthusiasts.", reviews: 140, stars: 5 },
  { id: 48, name: "Porsche Metal Poster", image: p48_img, category: "popular", new_price: 259, old_price: 619, description: "A stylish Porsche metal poster to elevate any car lover's collection.", reviews: 85, stars: 4 },
  { id: 49, name: "Fast and Furious: Tokyo Drift Metal Poster", image: p49_img, category: "new", new_price: 219, old_price: 529, description: "A high-octane poster featuring 'Tokyo Drift' from the Fast and Furious series.", reviews: 90, stars: 4 },
  { id: 50, name: "Porsche 911 Metal Poster", image: p50_img, category: "new", new_price: 269, old_price: 639, description: "An elegant metal poster featuring the iconic Porsche 911 for car lovers.", reviews: 75, stars: 5 },
  { id: 51, name: "The Weeknd Metal Poster", image: p51_img, category: "new", new_price: 189, old_price: 499, description: "A stylish poster of The Weeknd for music fans.", reviews: 65, stars: 4 },
  { id: 52, name: "Lana Del Rey Metal Poster", image: p52_img, category: "new", new_price: 189, old_price: 499, description: "A dreamy metal poster of Lana Del Rey, perfect for fans.", reviews: 58, stars: 4 },
  { id: 53, name: "Hugh Jackman Metal Poster", image: p53_img, category: "new", new_price: 219, old_price: 549, description: "A captivating metal poster featuring Hugh Jackman, great for any fan.", reviews: 92, stars: 5 }

];

export default products;