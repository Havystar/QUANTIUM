import {
    LinearProgress, Stack,
} from "@mui/material";
import { useEffect, useState } from "react";

export const ImageFallback = ({ isLoading, image }: { isLoading: boolean, image: string }) => {

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress > 95) {
                    return oldProgress
                }
                const diff = Math.random() * 5;
                return Math.min(oldProgress + diff, 100);
            });
        }, 500);

        return () => {
            clearInterval(timer);
            setProgress(0);
        };
    }, []);

    return (
        <>
            {isLoading ? <Stack sx={{ margin: 'auto', width: '90%', color: 'grey.500' }} spacing={2}>
                <LinearProgress variant="determinate" value={progress} color="warning" />
            </Stack> :
                <figure
                    style={{
                        height: "auto",
                        margin: "10vh auto 0 auto",
                    }}
                >
                    <img src={image} alt="Quantum Vortex Art" />
                </figure>
            }
        </>
    )
}
