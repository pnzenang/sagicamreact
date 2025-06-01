import {} from 'react-icons/fa6';

import image from '../assets/images/saving.jpg';
import peace from '../assets/images/peace.jpg';
import family from '../assets/images/family.jpg';
import ScrollToTop from 'react-scroll-to-top';
// import { Seo } from './Seo';

export default function About2() {
  return (
    <>
      <section className=' mt-20'>
        <ScrollToTop smooth color='#0891b2' width='40' />
        <div>
          <h1 className='text-3xl sm:text-6xl text-center font-bold capitalize text-base-content'>
            Aout us
          </h1>
          <div className='w-28 mt-3 h-1 bg-cyan-600 mx-auto '></div>
        </div>
      </section>
      <section className='p-4 sm:pt-32 pb-32 text-base-content align-element'>
        <div className='container mx-auto space-y-32'>
          <div className='flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row'>
            <img
              src={peace}
              alt=''
              className='h-80 dark:bg-gray-500 aspect-video  '
            />
            <div className='flex flex-col justify-center flex-1 p-6 bg-base-200'>
              <h3 className='text-3xl font-bold'>
                SAGICAM GIVES PEACE OF MIND
              </h3>
              <p className='my-6 '>
                Sponsoring my loved ones in SAGICAM reassures me that by doing
                my part every month by helping other, the whole SAGICAM
                community will be there for me in case I lose a loved one.
              </p>
            </div>
          </div>
          <div className='flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse'>
            <img
              src={family}
              alt=''
              className='  h-80 dark:bg-gray-500 aspect-video object-cover'
            />
            <div className='flex flex-col justify-center flex-1 p-6 bg-base-200'>
              <h3 className='text-3xl font-bold'>SAGICAM KEEPS US CONNECTED</h3>
              <p className='my-6 '>
                There is a chance that you still have families back in Cameroon
                that you hold to heart, by sponsoring them in SAGICAM, you can
                be sure that you will not be alone if one comes to pass away.
              </p>
            </div>
          </div>
          <div className='flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row'>
            <img src={image} alt='' className='h-80  aspect-video' />
            <div className='flex flex-col justify-center flex-1 p-6 bg-base-200'>
              <h3 className='text-3xl font-bold'>SAGICAM HELPS SAVE MONEY</h3>
              <p className='my-6 '>
                With your loved ones registered in SAGICAM, any expenditures
                related to their passing become the SAGICAM community&apos;s
                problem, and your only responsibility will be to mourn your
                family member.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
