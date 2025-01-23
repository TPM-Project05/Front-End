import ShimmerButton from "./ui/shimmer-button";
import { Marquee } from "@/components/eldoraui/marquee";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export default function ContactUs() {
    const companies = [
        {
          name: "Nocturnailed",
          url: "https://s3-alpha-sig.figma.com/img/5f17/0811/68b5501e7b795e952324b0265adfe954?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LHoac7BD8iesHtaQHvpP42eOacVFDDcpzLzu66-golwntxoBlRl8IBr3Qv013CQ1wkx1ecuP~XZEa~CKebUX60JRYyGzbHT7M3CTKfRiKtpcRemuGSRNDzIJHFg-0vIG8sKbBWaILodHipi0SWsJvfnCauyFG7ebHIbNZ0jku2L2eWx0Vnfg4uq4jGJqKX28S~n0JhGwEMjOnElNSk-JzU7MNr7eZ6jDZqV11DiVeC6SQenHC9yIaknZX~DR3GiPCJTwVOn1x0OqBpi~8SQIgIdzaKYZjaed6VnIATFSMwwJnbVPcdc2qjgIRR2eZHQlw~MsVMZlhQC6qLmBMju8Cw__",
          width: 50,
          height: 100
        },
        {
          name: "YUKCODING",
          url: "https://s3-alpha-sig.figma.com/img/f86c/e308/4e541a964319637c92988505f0ea2fed?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gqiB8Jf8kmYUoThNqfdoVs1ZkNNLCtic8UBRHdbXqJlT5btuRfDtR9Lr6e8Mr4jU-bbiWTZUwWw50YzlMPw1Ha5EbcqXnM5TopBRpZTX1g-ByNTceI69VFM~6SmR5exi17Nb5ZOCwTFWmgCw6XfN7GYweX3HxHwxD7JgQ3SZh~05FjN8JCc-9OQxFGZv451-fd9O5S7-VXdtYSB1UyyUXJBYkolrMm7McU7TjM2iI6MCKOaulDh8OkF804di2jVO0Y71gOunf3yDE3Y7aaN3fsANCCb8u6OXbdWqwx7iztnRjBgvlnQ-8dOR-NGKAziBFFSH80amlYUsqIRG-xRoug__",
          width: 200,
          height: null
        },
        {
          name: "CodingStudio",
          url: "https://s3-alpha-sig.figma.com/img/629b/445e/76057109b10ade9bf0f2fc8cd61520d8?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PBLQhpC3gPiRDcVvKHrV7TvUwxQfN8seTmWX4s47qGL9DL1mzDC9rq~HdJqbN6ltx45eyjjD5S1Iev91elnVb1tUvKWPGKcV2Mvlyuy-UNyjtcx~epgJN8FzwbYg64nA~U86mQZnDc47qhDyIOXYorHnYNGzFWDDp55qma4CRhNN~IMqvjumlYVYDVzqGXpzYHr5El-QdtNeRo1wfZqwncdjzeOkj0u85ZRVLh8-WT1PJlK05zbH1xJR6VfvFAZ~w38wV4RooRuzBmwtlnTU2iisTqyrdLPb91Ud6eOC4ZdeudR0nKFdJijzfFyTIZELfNDj50QOG-HDgvA0jJtzXQ__",
          width: 200,
          height: null
        },
        {
          name: "kuatbaca.com",
          url: "https://s3-alpha-sig.figma.com/img/340b/6af3/b317b98f9f786681112d8e8a9b0d661a?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZNc3teHzN3vlS2FZ9khvh4HsqLD03x1i6-i5T6f6nHCNEvDfS0BWppLJBh0-7yneAcCfe44efin~3mtD-Q9ok6bAbeLwvwDDZ90AtI1GYi8T4bbh-tFSYSakdCmYp7TS4mvnX0-s27GwUzcWkC6Hgc72FKBx7BJ1YHBNvfEd7rrl1tE9SsYPNn-WKjXw2Z8KohmxIIyAKxI8oLMYtPvyHp~LWYcskI9Y4bZEi48mwyRXx4hXspU3v6eEQdFjyBnQwov5fkR6iRi70kJtJQYAUvjVheGVmqL8qK-Mg~RcmSKIZf2lcpqToRTCSreXRPs86AvzIzN95mltN0WJd-FprA__",
          width: 200,
          height: null
        },
        
        
        {
          name: "DigitalSkola",
          url: "https://s3-alpha-sig.figma.com/img/5f77/7abe/5eeaa7ee70667de42587ed9f4b480cd7?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G2VhnyvWkQ4mup37fFFhjmOr0rSP6oyAw-hLKuteibKXTjhS1iQFAKsm02g8VpHLqqyOGHyqIUYhw3TwfGQ2POXlomhyIawXF8SioeOdDJdzp8UQwbq9xckF3bLygpru79nFfYxL~-~Z8H~eMmcGvpC1d6Jar79KXyQgbayhhZ36UtTbuuLHHMODywV9gfA2sIlJRb62vMlPXUkWpfnB7zRP-do~~LoIl~srZZpBo6JO-PCEgRkw5804yZCfv6dJReS6~N0efM4s5P-uHa76G36zsNmW9~2iqndAiiqPZfohcXnKV2ZEtPlwEc1FtFws7oEC6uw-vi1ZHqHWjb9ShA__",
          width: 400,
          height: null
        },
        {
          name: "Kerja",
          url: "https://s3-alpha-sig.figma.com/img/6761/36df/7fae07a13b0bd15b27f597bdb87cdd04?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XvZCT2D~knjhoU7ZpuyQMwejYg1O7FDqg64CeetVuiRjRhtIsmO-HeqSgSrImcqxyJ0lqUH7b8LlPuBThRsnGYz8bhLIc8AYVGzChVWum0SuUgey~z9wf3GYiiQzE4x7IoSdOlUYvMO0ubEEs-Y76lZ003lrtm66KDddcXax-pxYivLkwiK7ficAtvjPi~nuwW13XvvmncBkTXNu~3zRSBrBv~UVWhREAL3WymKqIfvPRTeX8SXOzoW394opbCKv380Cv~wTtUH7K28uW9o7LYnLAjH-zSsZuHlUoY3gEqqc2~6u5-~lMnxq9fYu9b4hbnEIJKAlM0aG1VrOyRX6iQ__",
          width: 150,
          height: null
        },
        {
          name: "FileMagz",
          url: "https://s3-alpha-sig.figma.com/img/d065/a68e/ca9967a402c5a5f5e60df644bee920ee?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WvWREe1LkucXY0BQNwxzzoCj0fX03pXkUypVSaUfCZqswwi7ViTmjrOwwPkD7qXWb4LSgDdM4V~USL6NUsVngaVGB2MaY8OP3zkaqOsLLr7VLGp~WLcaV2o-msY~3zlODhPDWwDHTaJdR-GfAm00OGMY93h~zazPY9tLAF5au9cQu9p17yK4DAjf2We4njGeqNGUZba64uODgEeYyAF0Hd8jbfivwsMLwcVX6lZDjpI86wLGzYY6WY--UlEKIskcoCLR12-Dx4b~N~xyE6rchZ8GS5KLsAxaSS7KwtweD1JlMvhQU2Ln-S59I9mgiKGhBWdQdxHMEE0fidprWyla~Q__",
          width: 150,
          height: null
        },
        {
          name: "Dolab",
          url: "https://s3-alpha-sig.figma.com/img/48e4/8de5/e771c5f319e864e83fbe915c9cd6010a?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cK8dfEUYjUUVw47O2mNMTFz4AY2O02bvKuDTMrPZVDsDnIAZW-7vlJT2JXNcQMjN3O67qmuIjTRoDloyoAk1FrAm1SfQQc-DZPV~Lg6rbAmf5-WUKPqHY1MFJUT67Db3D-Adhl1pcgeVsFGRDAjNcj9~QG9pWHOUfSWaib8q-e-SBetWpImgwRu4eSXBDkGvFiw7lDyXZqhWgC7ogOTFlyRz9hN~kSNzl44kwCxx1sS3JWtIjZv08S8wEppgCBQ9i88MEXZLY7D4SovNLS-QyKkqsD0Ag8Yp0JUBWnpGvGmmf-H4VTfHC1YpC1tyWpBtgtwfUeivgSrj3XTuFin1YA__",
          width: 150,
          height: null
        },
      ];

    return (
      <div className="">
        <div className="font-poppins leading-tight flex justify-center">
            <div className="text-[56px] text-glow text-white font-poppins">Media Partners</div>
        </div>
      <section id="logos">
          <div className="relative mt-6 bg-white h-[145px] flex justify-center items-center">
            <Marquee className="[--duration:40s]">
            {companies.map((company, idx) => (
                <img
                  key={idx}
                  width={company.width || 200}
                  height={company.height || 65} // Default height 65 jika tidak didefinisikan
                  src={company.url}
                  alt={company.name}
                />
              ))}
            </Marquee>
          </div>
      </section>

        {/* Contact Us */}
        <div className="flex flex-col items-center justify-center mb-10 mt-10">
          <div className="font-poppins leading-tight flex justify-center">
            <div className="text-[56px] pb-5 text-glow text-white font-poppins">Contact Us</div>
          </div>
          <div className="rounded-[5px] border shadow-lg border-white">
            <div className="w-[650px] bg-gray-800 p-6 rounded-[5px]">
              <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 grid-rows-3 gap-3">

                {/* Form Fields */}
                <div className="flex flex-col">
                    <label className="text-white">Name</label>
                    <input
                        type="text"
                        className="bg-gray-700 text-gray-200 rounded-[14px] p-6 w-[268px] focus:bg-gray-600 focus:outline-none 
                        focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 h-[50px] mt-2"
                        placeholder="Name"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-white">Email</label>
                    <input
                        type="email"
                        className="bg-gray-700 text-gray-200 rounded-[14px] p-6 w-[268px] focus:bg-gray-600 focus:outline-none 
                        focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 h-[50px] mt-2"
                        placeholder="Email"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-white">Subject</label>
                    <input
                        type="text"
                        className="bg-gray-700 text-gray-200 rounded-[14px] p-6 w-[268px] focus:bg-gray-600 focus:outline-none 
                        focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 h-[50px] mt-2"
                        placeholder="Subject"
                    />
                </div>
    
                {/* Message (aligned to the right) */}
                <textarea
                  name="Your Message"
                  className="col-span-2 row-span-3 col-start-2 row-start-1 bg-gray-700 mt-8
                 text-gray-200 rounded-md p-3 w-full h-[238px] focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  placeholder="Message"
                ></textarea>
              <div className="flex items-center">
                <ShimmerButton className="shadow-2xl w-[200px] h-[50px]">
                    <span className="whitespace-pre-wrap text-center text-sm font-medium 
                    leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10">
                    Submit
                    </span>
                </ShimmerButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  