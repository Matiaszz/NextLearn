const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-center w-full h-32 bg-blue-700 text-white select-none">
            <div className="flex gap-6 text-lg font-medium">
                <a href="#" className="hover:text-blue-300 transition-all">About Us</a>
                <a href="#" className="hover:text-blue-300 transition-all">Privacy Policy</a>
                <a href="#" className="hover:text-blue-300 transition-all">Contact</a>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Next Learn. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
