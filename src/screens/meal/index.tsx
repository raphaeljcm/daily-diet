import { DefaultHeader } from '@components/default-header';
import * as S from './styles';
import { Button } from '@components/button';
import { PencilSimple, Trash } from 'phosphor-react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export function Meal() {
  const navigation = useNavigation();
  const { params } = useRoute();
  const { id } = params as { id: string };

  const handleEditMeal = () => {
    navigation.navigate('change-meal', { id });
  };

  return (
    <S.Container>
      <DefaultHeader title="Refeição" />

      <S.MainContainer>
        <S.ContentContainer>
          <S.ParagraphContainer>
            <S.Title>Sanduíche</S.Title>
            <S.Paragraph>
              Sanduíche de pão integral com atum e salada de alface e tomate
            </S.Paragraph>
          </S.ParagraphContainer>

          <S.ParagraphContainer>
            <S.Subtitle>Data e hora</S.Subtitle>
            <S.Paragraph>12/02/2024 às 12:00</S.Paragraph>
          </S.ParagraphContainer>

          <S.DietContainer>
            <S.DietCircle onDiet />
            <S.Paragraph>dentro da dieta</S.Paragraph>
          </S.DietContainer>
        </S.ContentContainer>

        <S.ActionsContainer>
          <Button
            title="Editar refeição"
            Icon={PencilSimple}
            onPress={handleEditMeal}
            fullWidth
          />
          <Button
            title="Excluir refeição"
            variant="secondary"
            Icon={Trash}
            fullWidth
          />
        </S.ActionsContainer>
      </S.MainContainer>
    </S.Container>
  );
}
