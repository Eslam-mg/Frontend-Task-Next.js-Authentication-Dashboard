import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative text-white">
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <Image src="/image/kids-photo-desktop.png" alt="kids-photo-desktop" fill className="object-cover hidden md:block" />
                <Image src="/image/kids-photo-mobile.png" alt="kids-photo-mobile" fill className="object-cover object-right block md:hidden" />
                <div className="absolute inset-0 bg-black/70" />
            </div>

            <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 grid-cols-2 md:grid-cols-4">
                {/* Column 1 */}
                <div className="col-span-2 lg:col-span-1">
                    {/* logo */}
                    <Image src="/image/white-logo.png" alt="copany logo" width={65} height={50} />
                    <p className="mt-4 text-sm text-gray-300 leading-relaxed">
                        Ipsum in eos qui consequatur ab cum maxime. Soluta dolor quae
                        ipsum in eos qui consequatur ab cum maxime.
                    </p>
                </div>

                <div className="col-span-2 flex flex-row items-center justify-between md:justify-around">
                    {/* Column 2 */}
                    <div>
                        <h3 className="mb-4 text-lg lg:text-2xl font-semibold">Let Us Help</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li><Link href="/account">My Account</Link></li>
                            <li><Link href="/faq">FAQs</Link></li>
                            <li><Link href="/categories">Categories</Link></li>
                            <li><Link href="/products">All Products</Link></li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h3 className="mb-4 text-lg lg:text-2xl font-semibold">Policies</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li><Link href="/refund">Refund Policy</Link></li>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/cancellation">Cancellation Policy</Link></li>
                            <li><Link href="/terms">Terms & Conditions</Link></li>
                            <li><Link href="/privacy">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Column 4 */}
                <div className="col-span-2 md:col-span-4 lg:col-span-1">
                    <h3 className="mb-4 text-lg lg:text-2xl font-semibold">Send Email</h3>

                    <form className="w-full flex mb-6 bg-white rounded-xl p-2">
                        <input
                            type="email"
                            placeholder="Email address"
                            aria-label="Email address"
                            className="w-full pl-2 pr-4 py-2 bg-white text-black focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="rounded-lg bg-[#BE968E] px-6 font-medium cursor-pointer"
                        >
                            Send
                        </button>
                    </form>

                    <h4 className="mb-3 text-lg font-semibold">Follow Us</h4>
                    <div className="flex gap-4">
                        <Link aria-label="Facebook" href="#"><Image src="/icon/footer/facebook.svg"alt="Facebook icon" width={20} height={20} /></Link>
                        <Link aria-label="Twitter" href="#"><Image src="/icon/footer/twitter.svg" alt="twitter" width={20} height={20} /></Link>
                        <Link aria-label="Instagram" href="#"><Image src="/icon/footer/instagram.svg" alt="instagram" width={20} height={20} /></Link>
                        <Link aria-label="LinkedIn" href="#"><Image src="/icon/footer/linkedin.svg" alt="linkedin" width={20} height={20} /></Link>
                        <Link aria-label="WhatsApp" href="#"><Image src="/icon/footer/whatsapp.svg" alt="whatsapp" width={20} height={20} /></Link>
                        <Link aria-label="Telegram" href="#"><Image src="/icon/footer/telegram.svg" alt="telegram" width={20} height={20} /></Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}
