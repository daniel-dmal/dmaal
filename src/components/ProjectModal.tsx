import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { ProjectType } from "@/constants/projects";

const ProjecModal = ({ project }: { project: ProjectType }) => {
  const { title, description, techStack, link, video } = project;
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <AnimatePresence>
        {showModal ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key="modal"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-white/10 backdrop-blur-xs"
          >
            <AnimatePresence>
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                  borderRadius: "8px",
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                }}
                key="container"
                className="bg-black p-4 text-white shadow-lg"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  exit={{ opacity: 0 }}
                  key="content"
                >
                  <div className="flex flex-col items-center justify-center gap-[16px] lg:flex-row">
                    <div
                      className={`${video ? "h-auto w-auto" : "h-[65vh] w-[91vw]"} rounded-[8px] bg-white p-1 lg:h-[70vh] lg:w-[60vw]`}
                    >
                      {link ? (
                        <iframe
                          src={link}
                          loading="lazy"
                          className="h-full w-full"
                          style={{ zoom: 0.8 }}
                        />
                      ) : video ? (
                        <>
                          <video
                            src={`/videos/${title.toLowerCase()}1.mp4`}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="hidden w-full rounded-[8px] object-cover md:block md:max-h-[90vh] lg:min-h-[70vh]"
                          />
                          <video
                            src={`/videos/${title.toLowerCase()}1mobile.mp4`}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="object-fit block w-full rounded-[8px] md:hidden md:max-h-[90vh] lg:min-h-[70vh]"
                          />
                        </>
                      ) : (
                        <>
                          <img
                            src={`/images/${title.toLowerCase()}1.webp`}
                            alt={title}
                            className="hidden h-full w-full object-cover lg:block"
                          />
                          <img
                            src={`/images/${title.toLowerCase()}1mobile.webp`}
                            alt={title}
                            className="block h-full w-full object-cover lg:hidden"
                          />
                        </>
                      )}
                    </div>

                    <div className="w-full lg:w-[256px]">
                      <h1 className="text-2xl font-bold">{title}</h1>
                      <p className="text-sm">{description}</p>
                      <button
                        className="p1-2 mt-4 w-full cursor-pointer rounded-md border border-white bg-transparent px-4 py-1 text-white transition-colors hover:bg-white hover:text-black"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        ) : (
          <div
            className="transparent absolute inset-0 z-10 cursor-pointer"
            onClick={() => setShowModal(true)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjecModal;
