import { DefaultHeader } from '@components/default-header';
import * as S from './styles';
import { useReducer } from 'react';
import { Button } from '@components/button';
import { Input } from '@components/input';
import { SelectButton } from '@components/select-button';
import { useRoute } from '@react-navigation/native';

type FormReducerAction =
  | { name: string }
  | { description: string }
  | { date: string }
  | { time: string }
  | { isOnDiet: boolean };

type FormReducerState = {
  name: string;
  description: string;
  date: string;
  time: string;
  isOnDiet: boolean;
};

const INITIAL_STATE: FormReducerState = {
  name: '',
  description: '',
  date: '',
  time: '',
  isOnDiet: false,
};

export function ChangeMeal() {
  const [fields, dispatch] = useReducer(
    (state: FormReducerState, action: FormReducerAction) => ({
      ...state,
      ...action,
    }),
    INITIAL_STATE,
  );
  const { params } = useRoute() as { params: { id?: string } };
  const isEditMeal = params?.id ? true : false;

  const handleMealSubmit = () => {
    if (isEditMeal) {
      console.log('Editando refeição');
      return;
    }
    console.log('Criar nova refeição!');
  };

  return (
    <S.Container>
      <DefaultHeader title={isEditMeal ? 'Editar refeição' : 'Nova refeição'} />

      <S.MainContainer>
        <S.ContentContainer>
          <S.FieldContainer>
            <S.Label>Nome</S.Label>
            <Input onChangeText={e => dispatch({ name: e })} fullWidth />
          </S.FieldContainer>

          <S.FieldContainer>
            <S.Label>Descrição</S.Label>
            <Input
              numberOfLines={4}
              maxLength={40}
              textAlignVertical="top"
              onChangeText={e => dispatch({ description: e })}
              multiline
              fullWidth
            />
          </S.FieldContainer>

          <S.DietContainer>
            <S.FieldContainer>
              <S.Label>Data</S.Label>
              <Input onChangeText={e => dispatch({ date: e })} />
            </S.FieldContainer>
            <S.FieldContainer>
              <S.Label>Hora</S.Label>
              <Input onChangeText={e => dispatch({ time: e })} />
            </S.FieldContainer>
          </S.DietContainer>

          <S.FieldContainer>
            <S.Label>Está dentro da dieta?</S.Label>
            <S.DietContainer>
              <SelectButton
                label="Sim"
                variant="primary"
                isSelected={fields.isOnDiet}
                onPress={() => dispatch({ isOnDiet: true })}
              />
              <SelectButton
                label="Não"
                variant="secondary"
                isSelected={!fields.isOnDiet}
                onPress={() => dispatch({ isOnDiet: false })}
              />
            </S.DietContainer>
          </S.FieldContainer>
        </S.ContentContainer>

        <Button
          title={isEditMeal ? 'Salvar alterações' : 'Cadastrar refeição'}
          onPress={handleMealSubmit}
          fullWidth
        />
      </S.MainContainer>
    </S.Container>
  );
}
