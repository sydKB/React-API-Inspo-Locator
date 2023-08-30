import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Tips.css";
import {
  trad,
  tribal,
  other,
  newschool,
  neo,
  japanese,
  hand,
  bio,
  BG,
  mix,
} from "./img";

function Tips() {
  return (
    <section className="tips-back">
      <div className="tips">
        <div className="tips-text">
          <h2 className="tipstitle">The Needle Drop</h2>
          <h3>Tattoo Styles</h3>
          <ul>
            <li>Traditional</li>
            <p>
              Traditional tattooing, often referred to as "American Traditional"
              or "Old School," is a classic tattoo style with its roots in early
              20th-century American tattoo culture. Characterized by bold, solid
              lines and a limited color palette, traditional tattoos typically
              feature iconic imagery like anchors, swallows, roses, skulls, and
              pin-up girls. The style is known for its simplicity, high
              contrast, and timeless appeal. Traditional tattoos are often
              chosen for their durability and ability to age well over time.
              This style has had a significant influence on modern tattooing and
              remains a popular choice among enthusiasts and artists alike.
            </p>
            <img
              src={trad}
              alt="tattoo of a clipper ship with the words Hell Bound on a banner"
              className="tipsImages"
            />
            <li>Neo Traditional</li>
            <p>
              Neo-Traditional tattooing is a contemporary evolution of the
              traditional tattoo style, blending classic elements with more
              intricate and modern artistic techniques. It emerged as tattoo
              artists sought to incorporate greater detail, shading, and a
              broader color palette while maintaining the bold lines and
              recognizable imagery of traditional tattoos. Neo-Traditional
              tattoos often feature realistic portraits, nature motifs, animals,
              and mythological themes, while incorporating elements of
              surrealism, watercolor-style gradients, and illustrative
              techniques. This style allows for a more dynamic and visually
              striking result, combining the nostalgia of traditional tattoos
              with the creativity and complexity of modern artistic expression.
            </p>
            <img
              src={neo}
              alt="tattoo of a bizzare fly with detached human skull with eyes popping out "
              className="tipsImages"
            />

            <li>Japanese</li>
            <p>
              The Japanese tattoo style, also known as Irezumi, has a rich
              history and a distinct aesthetic that dates back centuries. Rooted
              in Japan's cultural and artistic traditions, this style is
              characterized by its elaborate and intricate designs that often
              cover large portions of the body. Japanese tattoos frequently
              feature motifs from Japanese folklore, mythology, and nature, such
              as dragons, koi fish, cherry blossoms, geisha, samurai, and waves.
              Irezumi is known for its use of bold outlines, vibrant colors, and
              intricate shading techniques that create a sense of depth and
              movement within the tattoo. The designs often tell a story or
              convey symbolic meanings, representing concepts like strength,
              resilience, protection, and spirituality. The traditional process
              of creating Japanese tattoos involves hand-poking or hand-tapping
              the ink into the skin, which is a meticulous and time-consuming
              method.
            </p>
            <img
              src={japanese}
              alt="tattoo of a green snake wrapped around a red peony flower"
              className="tipsImages"
            />
            <li>Tribal</li>
            <p>
              Tribal tattooing is a style inspired by the ancient tattoo
              traditions of various indigenous cultures around the world. It
              often features bold, black ink designs with sharp edges and
              abstract patterns. Tribal tattoos are known for their emphasis on
              lines, geometric shapes, and symmetry. These designs can be simple
              or complex, ranging from minimalist lines to intricate interwoven
              patterns. It's important to note that the term "tribal" can be
              controversial, as it oversimplifies and homogenizes the diverse
              tattoo practices of indigenous cultures.
            </p>
            <img
              src={tribal}
              alt="full arm tattoo with a Polynesian design "
              className="tipsImages"
            />
            <li>Biomech</li>
            <p>
              Bio-mechanical tattoos are a unique and futuristic tattoo style
              that combines elements of biology and mechanics. Inspired by the
              merging of human anatomy and machinery, bio-mech tattoos often
              depict intricate designs that give the illusion of the skin being
              peeled back to reveal mechanical parts beneath. These designs
              incorporate details like gears, pistons, wires, and circuitry,
              seamlessly integrated with organic elements like muscles, tendons,
              bones, or other non human biological feature.
            </p>
            <img
              src={bio}
              alt="tattoo of bio mechanical material opening up to show a galaxy "
              className="tipsImages"
            />

            <li>Fineline/Black & Grey</li>
            <p>
              Fine line black and grey tattoos are a minimalist tattoo style
              that focuses on intricate details, and subtle shading. These
              tattoos are characterized by their use of thin, delicate lines and
              varying shades of black and grey ink to create depth, contrast,
              and realism. Artists who specialize in this style often use
              techniques such as stippling, hatching, and cross-hatching to
              achieve different levels of shading and texture. It is worth
              nothing that any of these other genres of tattoo can be applied
              with only black and grey but fine line is a specific form into
              its-self.
            </p>
            <img
              src={BG}
              alt="a black and grey tattoo of a knight in armor with a sword and flail like melee weapon"
              className="tipsImages"
            />

            <li>Hand Poke</li>
            <p>
              Hand poke like black and grey can take the form of any style but
              is functionally different in application. Hand poke is done
              without the use of electric machines and relies on the artist
              individually poking in ink. The advent of the electric machine for
              tattooing is a recent invention in the historical framework of
              tattooing and many tribal or folk styles still depend on this
              tradition.
            </p>
            <img
              src={hand}
              alt="tattoo of a Japanese Raccoon Dog holding a container on a string "
              className="tipsImages"
            />

            <li>New School</li>
            <p>
              New School tattooing is a vibrant and playful tattoo style that
              emerged in the late 20th century as a departure from traditional
              and conventional designs. This style is characterized by its bold
              and exaggerated imagery, use of bright and bold colors,
              exaggerated proportions, and a cartoon-like aesthetic. New School
              tattoos often feature subjects like caricatures of animals,
              fictional characters, pop culture references, and surreal scenes.
            </p>
            <img
              src={newschool}
              alt="tattoo of a pink xenomorph"
              className="tipsImages"
            />

            <li>Other</li>
            <p>
              The above styles are some of the main types of tattoos, but there
              are plenty of others that are capable of being defined, or
              crossover between styles. There are also tattoos that are
              specifically cultural in meaning which should be considered when
              avoiding appropriation. With a history of tattoos in regards to a
              criminal element it is also worth considering imagery that does
              not have a specific criminal/gang meaning.
              <img
                src={other}
                alt="a piece of tattooed skin and a composite image taken from 5th century bc from the Scythian empire "
                className="tipsImages"
              />
              <img
                src={mix}
                alt="a tattoo of a womans head with mushrooms growing out of it "
                className="tipsImages"
              />
            </p>
          </ul>
          <h3>Things to look for/Thing to avoid</h3>
          <ul>
            <li>Linework</li>
            <p>
              Line work is one of the most important aspects of a tattoo.
              Straight and consistent thickness of the line is what you want to
              look for. Shaky or inconsistent lines are signs of poor
              application/technique. "Blowouts" are one of the main things to
              look for when deciding if an artist is a good tattooer. when the
              needle penetrates into a deeper layer of tissue than what is
              wanted the ink can spread a but and create a shadow effect along
              the line. Blowouts can occur without application error, and
              different places on the body are more prone to them, but
              consistent blowouts on an artists profile would be something to
              watch out for.
            </p>
            <li>Shading</li>
            <p>
              Shading consistency is also one of the key elements to look for in
              a tattoo/artist. There are styles without shading, but most
              employee shading to some degree. Smooth transitions from dark to
              light and a rich dark tone for the blacks and a fade to no ink is
              generally the desired application. Patchy blackwork or color can
              be hard to fix, and an absence of color called a "holiday" is an
              indication of poor technique/application.
            </p>
            <li>Palete</li>
            <p>
              The main thing to look for with palate is personal preference. If
              you like bright colors find an artist that goes for that. The main
              thing to consider is if you are looking for a specific style that
              the palate matches what you want. If an artist uses a wide range
              of colors with great color theory thats great, but maybe not if
              you want a purely traditional style.
            </p>
          </ul>
          <h3>Etiquette</h3>
          <ul>
            <li>Communication</li>
            <p>
              Different artists communicate differently both in setting up an
              appointment and tattoo design. Some artists will only tattoo
              "Flash" which is imagery they have designed and have ready to go.
              Some artists will only tattoo a specific design once, whereas
              others will repeat one of their designs. Other artists will do
              custom work or even specialize with reproduction of other work
              from a tattoo or non tattoo medium. If there is an artist you like
              try to determine that what you want is what they also like to do,
              and have the appropriate amount of information for them so they
              don’t need to ask every single questions they might have. How big
              do you want it, where do you want it, what is your time
              availability, do you have other tattoos, and maybe what your
              budget in are often preliminary information that will help your
              artist get you on their list. Some artists have long waitlists
              lasting months or even years so patience is key. Most artists
              communicate themselves so often long periods of non communication
              are common as they don’t always stay on top of emails.
            </p>
            <li>Day of getting your tattoo</li>
            <p>
              It is important to have a good sized meal beforehand as getting a
              tattoo can be taxing on the body. It is also important to be
              hydrated and very important for both of you to not be under the
              weather. Being drunk or otherwise impaired is a horrible idea,
              both for practical life reasons, but also because alcohol will
              thin your blood and make you bleed/bruise more easily.
            </p>
            <li>Tipping</li>
            <p>
              Treat tipping like you would at a nice restaurant. 15-20% is a
              normal amount, but also you could just do a flat amount based on
              how much time you spent, how much money you spent, or how good you
              felt about the experience. If you plan on getting tattooed out of
              the US then its worth using google to search for specific local
              tipping customs although tattoos can buck local trends.
            </p>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Tips;
