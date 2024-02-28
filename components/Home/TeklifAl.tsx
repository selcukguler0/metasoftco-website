import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export function TeklifAl() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="rounded-full bg-black text-white mt-8 px-8 py-4 font-bold transition-all hover:scale-110 delay-100">Teklif Alın</button>
            </DialogTrigger>
            <DialogContent className="w-full max-w-[600px] p-8 !rounded-none">
                <DialogHeader>
                    <DialogTitle className="text-3xl text-[#333333]">Teklif Alın</DialogTitle>
                </DialogHeader>
                <div className="mt-8">
                    <div>
                        <label className="text-lg font-medium" htmlFor="email">E-posta Adresiniz:</label>
                        <input type="email" id="email" className="w-full border-2 bg-metasoftco-bg/50 border-gray-300 p-3" />
                    </div>

                    <div className="mt-4">
                        <label className="text-lg font-medium" htmlFor="message">Mesajınız:</label>
                        <textarea id="message" className="w-full border-2 bg-metasoftco-bg/50 border-gray-300 p-3" />
                    </div>
                    <button className="rounded-full bg-black text-white mt-4 px-8 py-3 font-bold">Gönder</button>
                </div>
            </DialogContent>
        </Dialog>
    )
}
