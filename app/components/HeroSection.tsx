import { useState, FormEvent } from "react";

const HeroSection = () => {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Email submitted:", email);
        setSubmitted(true);
        setTimeout(() => {
            setEmail("");
            setSubmitted(false);
        }, 3000);
    };

    return (
        <section className="w-full bg-[rgb(245,82,155)] py-16 px-4">
            <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-7xl font-bold text-white mb-24 font-myriad">
                    Flert <span className="text-yellow-300">:)</span>
                </h1>

                <h2 className="text-3xl font-light text-white mb-10 font-myriad leading-relaxed">
                    Aquela pessoa que você queria ter conversado?
                    <br />
                    Ela também quis.
                </h2>

                <p className="text-base text-white/85 mb-10 font-myriad">
                    O Flert conecta pessoas que estão no mesmo lugar e se interessaram
                    mutuamente — sem exposições, sem medo de rejeição.
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="flex gap-4 justify-center max-w-2xl mx-auto mb-6"
                >
                    <input
                        type="email"
                        placeholder="Seu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="flex-1 px-6 py-4 rounded-lg text-gray-800 font-myriad focus:outline-none focus:ring-2 focus:ring-yellow-300 bg-white placeholder:text-gray-500"
                    />
                    <button
                        type="submit"
                        className="px-8 py-4 bg-[rgb(131,48,127)] hover:bg-[rgb(111,38,107)] text-white font-medium rounded-lg transition-colors duration-200 font-myriad"
                    >
                        Quero ser avisado
                    </button>
                </form>

                {submitted && (
                    <p className="text-base text-yellow-200 font-myriad">
                        ✓ Email registrado com sucesso! Um link de convite será enviado em
                        breve.
                    </p>
                )}

                <p className="text-sm text-white/70 mt-6 font-myriad">
                    Sem spam, só um aviso quando ficar disponível.
                </p>
            </div>
        </section>
    );
};

export default HeroSection;
