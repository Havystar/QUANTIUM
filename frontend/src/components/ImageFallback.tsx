import {
    LinearProgress, Stack,
} from "@mui/material";

export const ImageFallback = ({ isLoading, image }: { isLoading: boolean, image: string }) => {
    return (
        <>
            {isLoading ? <Stack sx={{ margin: 'auto', width: '90%', color: 'grey.500' }} spacing={2}>
                <LinearProgress color="warning" />
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
