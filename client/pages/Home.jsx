import {
  Flex,
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Text,
} from '@chakra-ui/react';
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import RouterConfig from "../const/RouterConfig";
import { useTranslation } from "react-i18next";

function Home() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Flex
      w='full'
      h='100vh'
      overflow='hidden'
      position='relative'
      align="center" justify="center"
    >
      <Card size='md' maxW='md' textAlign='center'>
        <CardHeader pb='0'>
          <Heading p='0'>{t('landing.title')}</Heading>
        </CardHeader>
        <CardBody display='flex' flexDirection='column' alignItems='center'>
          <Text mb='5'>{t('landing.desc')}</Text>
          <ButtonGroup >
            <Button onClick={() => navigate(RouterConfig.REGISTRATION.path)}>{t('button.register')}</Button>
            <Button onClick={() => navigate(RouterConfig.AUTH.path)}>{t('button.login')}</Button>
          </ButtonGroup>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default connect(({ ui }) => ({
  isLoading: ui.loading,
}), (dispatch) => ({dispatch}))(Home);