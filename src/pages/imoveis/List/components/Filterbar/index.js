import PropTypes from 'prop-types';
import { FiSearch, FiX } from 'react-icons/fi';
import { Button } from '../../../../../components/button';

import { Input } from '../../../../../components/input';
import { Select } from '../../../../../components/select';

import {
  Container, Title, Label, BoxSearch, Localizacao, BoxInfo,
} from './styles';

export default function FilterBar({ title }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Label>Localização</Label>
      <BoxSearch>
        <Input filterBar placeholder="Digite uma cidade, bairro ou código do imóvel" />
        <FiSearch size={15} color="#444444" />
      </BoxSearch>

      <BoxInfo>
        <Localizacao>
          <span>Piatã/BA </span>
          <FiX size={12} color="#ffffff" style={{ background: '#0da52e', marginLeft: 10, borderRadius: 2 }} />
        </Localizacao>
        <Localizacao>
          <span>Salvador/BA </span>
          <FiX size={12} color="#ffffff" style={{ background: '#0da52e', marginLeft: 10, borderRadius: 2 }} />
        </Localizacao>
      </BoxInfo>

      <Label>Tipo do imóvel</Label>
      <BoxSearch>
        <Select filterBar>
          <option value="">Selecione o tipo</option>
          <option value="apartamento">Apartamento</option>
          <option value="casa">Casa</option>
          <option value="sala">Sala</option>
          <option value="andar">Andar</option>
          <option value="lote">Lote</option>
          <option value="loja">Loja</option>
          <option value="galpao">Galpão</option>
        </Select>
      </BoxSearch>

      <Label>Quantidade de quartos</Label>
      <BoxInfo>
        <Button filterBar>1+</Button>
        <Button filterBar>2+</Button>
        <Button filterBar>3+</Button>
        <Button filterBar>4+</Button>
        <Button filterBar>5+</Button>
      </BoxInfo>

      <Label>Quantidade de banheiros</Label>
      <BoxInfo>
        <Button filterBar>1+</Button>
        <Button filterBar>2+</Button>
        <Button filterBar>3+</Button>
        <Button filterBar>4+</Button>
        <Button filterBar>5+</Button>
      </BoxInfo>

      <Label>Quantidade de vagas</Label>
      <BoxInfo>
        <Button filterBar>1+</Button>
        <Button filterBar>2+</Button>
        <Button filterBar>3+</Button>
        <Button filterBar>4+</Button>
        <Button filterBar>5+</Button>
      </BoxInfo>

      <Label>Valor</Label>
      <BoxInfo>
        <Input filterBarValor placeholder="Mínimo" />
        <Input filterBarValor placeholder="Máximo" />
      </BoxInfo>
      <Label>Características</Label>
      <BoxInfo checkbox>
        <div>
          <Input checkbox type="checkbox" />
          <Label checkbox>Piscina</Label>
        </div>

        <div>
          <Input checkbox type="checkbox" />
          <Label checkbox>Playground</Label>
        </div>

        <div>
          <Input checkbox type="checkbox" />
          <Label checkbox>Portaria 24h</Label>
        </div>

        <div>
          <Input checkbox type="checkbox" />
          <Label checkbox>Acessível PMR</Label>
        </div>

        <div>
          <Input checkbox type="checkbox" />
          <Label checkbox>Salão de festas</Label>
        </div>

        <div>
          <Input checkbox type="checkbox" />
          <Label checkbox>Academia</Label>
        </div>

        <div>
          <Input checkbox type="checkbox" />
          <Label checkbox>Área Gourmet</Label>
        </div>

      </BoxInfo>
      <Label>Comodidades</Label>
      <BoxInfo checkbox>
        <div>
          <Input checkbox type="checkbox" />
          <Label checkbox>Elevador</Label>
        </div>

        <div>
          <Input checkbox type="checkbox" />
          <Label checkbox>Mobiliado</Label>
        </div>

        <div>
          <Input checkbox type="checkbox" />
          <Label checkbox>Armários</Label>
        </div>

        <div>
          <Input checkbox type="checkbox" />
          <Label checkbox>Vaga coberta</Label>
        </div>

        <div>
          <Input checkbox type="checkbox" />
          <Label checkbox>Banheira</Label>
        </div>

        <div>
          <Input checkbox type="checkbox" />
          <Label checkbox>Aquecimento solar</Label>
        </div>

        <div>
          <Input checkbox type="checkbox" />
          <Label checkbox>Ar condicionado</Label>
        </div>
      </BoxInfo>

    </Container>
  );
}

FilterBar.propTypes = {
  title: PropTypes.string.isRequired,
};
