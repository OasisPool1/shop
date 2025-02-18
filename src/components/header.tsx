import { BellIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "./ui/button";

export default function Header({ title }) {
    return <header className="flex flex-row justify-between items-center py-8">
        <img className="w-24" src="/logo.jpg" />
        <h1 className="text-4xl capitalize">{title}</h1>
        <div className="flex flex-row gap-4">
            <Button variant="ghost" size="icon">
                <BellIcon />
            </Button>
            <Button variant="ghost" size="icon">
                <ShoppingCartIcon />
            </Button>
        </div>
    </header>
}