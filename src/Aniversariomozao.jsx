
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ConfettiExplosion from "react-confetti-explosion";
import { PartyPopper } from "lucide-react";

export default function Aniversariomozao() {
  const [showMessage, setShowMessage] = useState(false);
  const [explode, setExplode] = useState(false);

  const handleSurpresa = () => {
    setShowMessage(true);
    setExplode(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 p-4">
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="text-4xl font-bold text-pink-600 mb-6 text-center"
      >
        🎉 Uma surpresinha! 🎉
      </motion.h1>

      {!showMessage ? (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="shadow-2xl rounded-2xl bg-white p-6">
            <CardContent className="flex flex-col items-center">
              <p className="text-lg text-gray-700 mb-4 text-center">
                Clique no botão para descobrir uma surpresa! 💖
              </p>
              <Button onClick={handleSurpresa} className="bg-pink-500 hover:bg-pink-600 text-white">
                Abrir Surpresa!
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      ) : (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 150 }}
          className="text-center"
        >
          {explode && <ConfettiExplosion force={0.8} duration={5000} particleCount={300} width={1600} />}

          <Card className="shadow-2xl rounded-2xl bg-white p-8">
            <CardContent className="flex flex-col items-center">
              <PartyPopper className="text-pink-400 w-12 h-12 mb-4 animate-bounce" />
              <h2 className="text-2xl font-semibold text-pink-600 mb-2">
                Feliz Aniversário Amor da minha vida! 🥳
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Que papai do céu traga muita saude e dindin pra você, que esse dia mais que especial seja cheio de alegria e felicidade! 
                Que você realize todos os seus sonhos, você merece tudo de melhor hoje e sempre. EU TE AMO!!!💕
              </p>
              <audio autoPlay>
                <source src="/parabens.mp3" type="audio/mpeg" />
                Seu navegador não suporta áudio.
              </audio>
              <a
                href="https://youtube.com/shorts/5isW_LHCUEs?feature=share"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4"
              >
                <Button className="bg-red-500 hover:bg-red-600 text-white">
                  Assistir um vídeo 🎥
                </Button>
              </a>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
}
