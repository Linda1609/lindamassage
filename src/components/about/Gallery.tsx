"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const gallery = [
  {
    src: "/images/linda5.jpg",
    alt: "Linda wellness experience",
  },
  {
    src: "/images/linda14.jpg",
    alt: "Relaxing wellness space",
  },
  {
    src: "/images/linda11.jpg",
    alt: "Massage experience",
  },
  {
    src: "/images/linda3.jpg",
    alt: "Wellness atmosphere",
  },
];

export default function Gallery() {
  return (
    <section className="bg-[#f7f3eb] pb-20 pt-24 md:pb-32 md:pt-28">
      <div className="mx-auto max-w-[1236px] px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"
        >
          <div>
            <div className="mb-4 flex items-center gap-4">
              <span className="h-px w-10 bg-[#adb718]" />

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8d792d]">
                Moments
              </p>
            </div>

            <h3 className="font-serif text-4xl leading-tight text-[#332424] sm:text-5xl">
              Behind the
              <span className="italic text-[#8d9920]"> journey.</span>
            </h3>
          </div>

          <p className="max-w-sm text-sm leading-6 text-[#332424]/60 md:text-right">
            A glimpse into the peaceful atmosphere and personal care that
            shape every wellness experience.
          </p>
        </motion.div>

        {/* Gallery */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">

          {/* Large image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              group
              relative
              h-[430px]
              overflow-hidden
              rounded-[2rem]
              sm:h-[500px]
              lg:col-span-5
              lg:h-[620px]
            "
          >
            <Image
              src={gallery[0].src}
              alt={gallery[0].alt}
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-xs uppercase tracking-[0.25em] text-white/70">
                01
              </p>
              <p className="mt-1 font-serif text-2xl">
                Relaxation
              </p>
            </div>
          </motion.div>

          {/* Middle column */}
          <div className="grid gap-4 lg:col-span-4">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="group relative h-[280px] overflow-hidden rounded-[2rem] lg:h-[300px]"
            >
              <Image
                src={gallery[1].src}
                alt={gallery[1].alt}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="group relative h-[280px] overflow-hidden rounded-[2rem] lg:h-[300px]"
            >
              <Image
                src={gallery[2].src}
                alt={gallery[2].alt}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </motion.div>

          </div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="
              group
              relative
              h-[430px]
              overflow-hidden
              rounded-[2rem]
              sm:h-[500px]
              lg:col-span-3
              lg:mt-20
              lg:h-[520px]
            "
          >
            <Image
              src={gallery[3].src}
              alt={gallery[3].alt}
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 25vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-xs uppercase tracking-[0.25em] text-white/70">
                04
              </p>
              <p className="mt-1 font-serif text-2xl">
                Wellness
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
