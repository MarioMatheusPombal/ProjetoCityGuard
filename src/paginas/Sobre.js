import * as React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ResponsiveAppBar from "../utils/navbar";


export default function Album() {
    return (
        <>
            <div>
                <ResponsiveAppBar></ResponsiveAppBar>
            </div>
            <div>
                <main>
                    {/* Hero unit */}
                    <Box sx={{flexGrow: 1, display: {xs: 'flex'}}}>

                        <Container maxWidth="sm">
                            <Typography
                                component="h1"
                                variant="h2"
                                align="center"
                                color="text.primary"
                                paddingTop={5}
                                gutterBottom
                            >
                                O que é o CityGuard?
                            </Typography>
                            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                                Segurança e qualidade de vida para você e sua família, agora na palma da sua mão.
                            </Typography>

                            <Typography variant="p" align="justify" paddingTop={5} color="text.secondary" paragraph>
                                A plataforma CityGuard foi criada com o objetivo de melhorar a qualidade de vida dos
                                moradores de uma região através da participação ativa e colaborativa da comunidade
                                local. Com essa plataforma digital, os moradores terão a possibilidade de se comunicar
                                com as autoridades locais, relatar problemas e sugerir soluções.
                            </Typography>

                            <Typography variant="p" align="justify" color="text.secondary" paragraph>
                                O principal objetivo do CityGuard é promover uma vida melhor para todos os moradores da
                                região. Para isso, o software incluirá diversas funcionalidades, como o relato de
                                problemas e sugestões, a comunicação direta com as autoridades locais, o monitoramento
                                da segurança da região, a transparência no processo de tomada de decisão e o engajamento
                                da comunidade local. As autoridades locais também poderão aumentar a transparência do
                                processo de tomada de decisão, permitindo que a comunidade acompanhe e participe de
                                discussões e deliberações importantes para a região.
                            </Typography>

                            <Typography variant="p" align="justify" color="text.secondary" paragraph>
                                Com a introdução da plataforma no cotidiano, a segurança da região também será
                                melhorada, uma vez que os moradores poderão relatar atividades suspeitas e ajudar a
                                polícia a identificar e prender criminosos. Além disso, o software coletará dados que
                                serão utilizados para embasar possíveis medidas futuras. Ela será fácil de usar e
                                acessível a todos os moradores da região, independentemente do seu nível de habilidade
                                com tecnologia. Assim, todos poderão colaborar para tornar a região um lugar ainda
                                melhor para se viver.
                            </Typography>

                            <Typography variant="h6" align="center" color="text.secondary" paddingTop={2} paragraph>
                                Como utilizar?
                            </Typography>

                            <Typography variant="p" align="justify" color="text.secondary" paragraph>
                                O CityGuard é multiplataforma, tanto web como mobile, o que significa que ele está
                                disponível para uso e download nos principais sistemas operacionais e serviços de
                                distribuição de conteúdo digital. Independente da plataforma, o CityGuard sempre estará
                                presente e prezando pela sua segurança e da sua família.
                            </Typography>


                            <Stack
                                sx={{pt: 4}}
                                direction="row"
                                spacing={2}
                                justifyContent="center"
                            >

                            </Stack>
                        </Container>
                    </Box>


                </main>

                <Box sx={{bgcolor: 'background.paper', p: 6}} component="footer">
                    <Typography
                        variant="subtitle1"
                        align="center"
                        color="text.secondary"
                        component="p"
                    >
                        CityGuard: Aliando a tecnologia à qualidade de vida.
                    </Typography>
                </Box>
            </div>
        </>
    );
}