import ClientSVG from '../../assets/clients/client.svg';
import ClientSVG1 from '../../assets/clients/client-1.svg';
import ClientSVG2 from '../../assets/clients/client-2.svg';
import ClientSVG4 from '../../assets/clients/client-3.svg';
import ClientSVG5 from '../../assets/clients/client-4.svg';
import ClientSVG6 from '../../assets/clients/client-5.svg';
import ClientSVG3 from '../../assets/clients/client-6.svg';
import CellphonePresentation from '../../assets/cellphone-presentation.svg';
import UsersSVG from '../../assets/users.svg';
import ClubsPrimarySVG from '../../assets/clubs-primary.svg';
import ClicksSVG from '../../assets/clicks.svg';
import CreditCardSVG from '../../assets/credit-card.svg';
import MobileLoginSVG from '../../assets/mobile-login.svg';

import TeslaImage from '../../assets/tesla.png';

import Header from '../../components/Header';
import Banner from './components/Banner';

import { managementItems } from './mock';

function LandingPage() {
  return (
    <html lang="en">
      <body className="">
        <div className="px-32 py-6 bg-neutral-silver">
          <Header />
          <Banner />
        </div>

        <main className="flex flex-col items-center justify-center px-36">
          <h2 className="mt-10 mb-2 text-neutral-d_grey">Our Clients</h2>

          <span className="text-body_regular2 text-neutral-grey mb-8">
            We have been working with some Fortune 500+ clients
          </span>

          <div className="flex flex-1 w-full items-center justify-between mb-2">
            <img src={ClientSVG} alt="client" />
            <img src={ClientSVG1} alt="client 1" />
            <img src={ClientSVG2} alt="client 2" />
            <img src={ClientSVG3} alt="client 3" />
            <img src={ClientSVG4} alt="client 4" />
            <img src={ClientSVG5} alt="client 5" />
            <img src={ClientSVG6} alt="client 6" />
          </div>

          <h2 className="mt-10 mb-2">
            Manage your entire community in a single system
          </h2>

          <span className="text-body_regular2 text-neutral-grey mb-4">
            Who is Nextcent suitable for?
          </span>

          <div className="flex items-center justify-between w-full text-center mb-14">
            {managementItems.map((item) => (
              <div className="flex flex-col items-center justify-center p-6">
                <img src={item.icon} className="mb-4" />
                <h3 className="text-neutral-d_grey mb-2">{item.title}</h3>
                <span className="text-neutral-grey text-body_regular3">
                  {item.description}
                </span>
              </div>
            ))}
          </div>

          <section className="flex w-full items-center justify-center mb-12">
            <img src={CellphonePresentation} />

            <div>
              <h2 className="text-neutral-d_grey mb-4">
                The unseen of spending three years at Pixelgrade
              </h2>
              <span className="text-body_regular3 text-neutral-grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
                Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
                tristique iaculis. Nullam pulvinar sit amet risus pretium
                auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus
                sem. Donec elementum pulvinar odio.
              </span>

              <button className="bg-primary px-5 py-2 text-neutral-white rounded w-32 mt-8 text-body_medium2">
                Learn More
              </button>
            </div>
          </section>
        </main>

        <section className="flex w-full items-center justify-between bg-neutral-silver py-16 px-36">
          <div>
            <h2 className="text-neutral-d_grey mb-2">
              Helping a local <br />
              <span className="text-primary">business reinvent itself</span>
            </h2>
            <p className="text-gray-900 text-body_regular2">
              We reached here with our hard work and dedication
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="flex items-center space-x-4">
              <img src={UsersSVG} />
              <div>
                <h3 className="text-neutral-d_grey">2,245,341</h3>
                <span className="text-neutral-grey text-body_regular2">
                  Members
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <img src={ClubsPrimarySVG} />
              <div>
                <h3 className="text-neutral-d_grey">46,328</h3>
                <span className="text-neutral-grey text-body_regular2">
                  Clubs
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <img src={ClicksSVG} />
              <div>
                <h3 className="text-neutral-d_grey">828,867</h3>
                <span className="text-neutral-grey text-body_regular2">
                  Event Bookings
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <img src={CreditCardSVG} />
              <div>
                <h3 className="text-neutral-d_grey">1,926,436</h3>
                <span className="text-neutral-grey text-body_regular2">
                  Payments
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-col items-center justify-center px-36 mt-12">
          <section className="flex w-full items-center justify-center mb-12">
            <img src={MobileLoginSVG} />

            <div className="flex flex-col">
              <h2 className="text-neutral-d_grey mb-4">
                How to design your site footer like we did
              </h2>
              <span className="text-body_regular3 text-neutral-grey">
                Donec a eros justo. Fusce egestas tristique ultrices. Nam
                tempor, augue nec tincidunt molestie, massa nunc varius arcu, at
                scelerisque elit erat a magna. Donec quis erat at libero
                ultrices mollis. In hac habitasse platea dictumst. Vivamus
                vehicula leo dui, at porta nisi facilisis finibus. In euismod
                augue vitae nisi ultricies, non aliquet urna tincidunt. Integer
                in nisi eget nulla commodo faucibus efficitur quis massa.
                Praesent felis est, finibus et nisi ac, hendrerit venenatis
                libero. Donec consectetur faucibus ipsum id gravida.
              </span>

              <button className="bg-primary px-5 py-2 text-neutral-white rounded w-32 mt-8 text-body_medium2">
                Learn More
              </button>
            </div>
          </section>
        </div>

        <section className="bg-neutral-silver flex w-full items-center justify-between py-8 px-36">
          <img src={TeslaImage} />

          <div>
            <span className="text-neutral-grey text-body_regular2 mb-4">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </span>

            <h4 className="text-primary mb-2">Tim Smith</h4>
            <span className="text-neutral-grey mb-8">
              British Dragon Boat Racing Association
            </span>
          </div>
        </section>
      </body>
    </html>
  );
}

export default LandingPage;
