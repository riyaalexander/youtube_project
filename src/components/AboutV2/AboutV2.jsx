import teamwork from "../../assets/team_work.png";
import riya from "../../assets/riya_alexander.jpeg";
import shaniqua from "../../assets/shaniqua_coston.jpeg";
import harold from "../../assets/harold_fachin.jpeg";

const AboutUs = () => {
  return (
    <div className="content-wrapper">
      <section id="about_project" className="py-16">
        <div className="container mx-auto px-4 flex flex-wrap flex-col space-y-2 md:flex-row">
          <div className="text_container text-justify w-full md:w-1/2 md:pr-8 order-1 md:order-1">
            <h2 className="text-2xl font-bold pb-10">YouTube Clone Project</h2>
            <p className="py-3">
              Our mission is to provide a platform for creators to share their videos and connect with viewers from all around the world. Inspired by the original YouTube, our platform allows users to upload, like, comment, and share videos with an
              easy-to-use interface that anyone can navigate.
            </p>
            <p className="py-3">
              We believe that everyone has a story to tell and talents to share, and we want to help make that possible. Whether your interest is in music, fashion, cooking, vlogs, or any other field, our platform provides a space to showcase your
              creativity and connect with a supportive community.
            </p>
            <p className="py-3">
              Here on our YouTube Clone, you will find a diverse range of content from people with various backgrounds and experiences. We encourage respectful and constructive discussions in our comments section to create a friendly and welcoming
              environment.
            </p>
            <p className="py-3">
              Our website is designed to be user-friendly, with responsive design optimized for different devices such as desktops, laptops, tablets, and smartphones. We also offer advanced features such as video recommendations based on your viewing
              history, personalized playlists, and a subscription system that allows you to easily keep up with your favorite creators.
            </p>
            <p className="py-3">Thank you for choosing to be a part of our community. Let's create, discover, and connect together on our YouTube Clone!</p>
          </div>
          <div className="image_container w-full pt-10 md:w-1/2 md:pl-8 order-2 md:order-2 flex justify-center items-center">
            <img src={teamwork} alt="teamwork" />
          </div>
        </div>
      </section>
      <section id="about_us">
        <div className="container mx-auto px-4 flex flex-wrap flex-col space-y-2 md:flex-col">
          <div className="flex justify-center items-center">
            <h1 className="text-4xl pb-1">Our Team</h1>
          </div>
          <div className="team_members flex justify-center items-center flex-col">
            <div className="max-w-xs rounded overflow-hidden shadow-lg bg-rose-500">
              <img className="w-80 h-64 object-cover" src={riya} alt="Sunset in the mountains" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Riya Alexander</div>
                <p className="text-gray-600 text-base">
                  As a graduate of John Jay College of Criminal Justice and a student in the Pursuit Fellowship for software development, I am committed to staying at the forefront of the rapidly evolving tech industry. I believe that knowledge is
                  key to success in this field, and I am dedicated to constantly expanding my skills and staying up-to-date with the latest developments.
                </p>
                <p className="text-gray-600 text-base">
                  Although my background is mainly in music and the arts, I have found a passion for coding and software development. With experience in teaching the arts and working as a security officer at a Northwell Hospital, I have developed
                  skills in communication, collaboration, and problem-solving that I believe are essential to success as a developer.
                </p>
                <p className="text-gray-600 text-base">
                  My current focus is on front-end development, and I am fluent in JavaScript, HTML, and CSS. Additionally, I am currently learning React and exploring new technologies to enhance my skills and stay up-to-date with the latest
                  developments in the field.
                </p>
                <p className="text-gray-600 text-base">
                  I am always eager to take on new challenges and work on exciting projects. Whether you need a new website designed or an existing application revamped, I am committed to delivering high-quality work that meets your unique needs and
                  exceeds your expectations. Thank you for considering me for your next project. Let's work together to bring your ideas to life!
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ambitious</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#visionary</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#authentic</span>
              </div>
            </div>
            <div className="max-w-xs rounded overflow-hidden shadow-lg bg-rose-500">
              <img className="w-80 h-64 object-cover" src={shaniqua} alt="Sunset in the mountains" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Shaniqua Coston</div>
                <p className="text-gray-600 text-base">
                  As a Pursuit fellow with a background in team leadership and behavioral health, I am passionate about helping people feel good about themselves and build strong bonds with others. My journey with software development began with
                  Pursuit's intensive 12-month software engineering fellowship, where I gained the skills I needed to make a positive impact on people's lives through technology.
                </p>
                <p className="text-gray-600 text-base">
                  Through my experience in behavioral health analysis and interpretation, crisis management, and customer service, I have learned to approach challenges with critical thinking and problem-solving skills. I am committed to using these
                  skills to design software that fosters familial connections, promotes personal growth, and enhances communication skills.
                </p>
                <p className="text-gray-600 text-base">
                  My focus is on front-end development, and I am fluent in JavaScript, HTML, and CSS. Additionally, I am currently learning React and exploring new technologies, such as edge computing and 3D printing, that may be relevant to my
                  programming goals.
                </p>
                <p className="text-gray-600 text-base">
                  Whether you are looking for a program for family event planning, workshops to promote personal growth, or any other project that promotes familial bonding and positive communication, I am here to help. Thank you for considering me
                  for your next project. Let's work together to create software that makes a difference in people's lives!
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#confident</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tenacious</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#trailblazer</span>
              </div>
            </div>
            <div className="max-w-xs rounded overflow-hidden shadow-lg bg-rose-500">
              <img className="w-80 h-64 object-cover" src={harold} alt="Sunset in the mountains" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Harold Fachin</div>
                <p className="text-gray-600 text-base">
                  As a full-stack web developer, I am passionate about using technology to solve problems and create elegant solutions. I have a strong background in Javascript, NodeJS, and algorithm design, as well as experience in debugging and
                  critical thinking. These skills have allowed me to deliver high-quality work that meets the needs of my clients and exceeds their expectations.
                </p>
                <p className="text-gray-600 text-base">
                  Originally from Lima, Peru and now based in Brooklyn, NY, I am proud to be part of a global community of software engineers who are dedicated to innovation and excellence. I am inspired by the power of technology to simplify
                  people's lives and make the world a better place.
                </p>
                <p className="text-gray-600 text-base">
                  My passion for programming is fueled by my love of learning and my commitment to staying at the forefront of the rapidly evolving tech industry. Whether I am working on a new project or exploring the latest developments in the
                  field, I am always eager to expand my skills and improve my abilities.
                </p>
                <p className="text-gray-600 text-base">
                  I believe that collaboration and communication are essential to success in any project, and I work closely with my clients to ensure that their needs and expectations are met. Whether you are looking for a new website, an advanced
                  algorithm, or anything in between, I am here to help you achieve your goals and bring your ideas to life. Thank you for considering me for your next project. Let's work together to create something amazing!
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#passionate</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#supportive</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#lazy</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
