import { CreditCard, CurrencyDollar, MapPinLine } from 'phosphor-react'
import {
  Address,
  AddressFormInput,
  AddressOptionalFormInput,
  BoxHeader,
  BoxTitle,
  CheckoutContainer,
  ClientInfos,
  FormInputs,
  InputsLine,
  OrderContainer,
  OrderContent,
  OrderSummary,
  OrderSummaryBoldText,
  OrderSummaryRegularText,
  PaymentMethod,
  PaymentOptions,
  PaymentOptionsItem,
} from './style'
import { Controller, useForm } from 'react-hook-form'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { OrderCoffeeCard } from '../../components/OrderCoffeeCard'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

const completeOrderFormSchema = z.object({
  cep: z.string(),
  street: z.string(),
  number: z.number(),
  complement: z.string().nullable(),
  neighborhood: z.string(),
  city: z.string(),
  uf: z.string(),
  paymentMethod: z.enum(['credit', 'debit', 'money']),
})

type CompleteOrderFormInputs = z.infer<typeof completeOrderFormSchema>

export function Checkout() {
  const { cartItems } = useContext(CartContext)

  const { control, register } = useForm<CompleteOrderFormInputs>({
    resolver: zodResolver(completeOrderFormSchema),
    defaultValues: {
      paymentMethod: 'credit',
    },
  })

  return (
    <CheckoutContainer>
      <ClientInfos>
        <BoxTitle>Complete seu pedido</BoxTitle>

        <form>
          <Address>
            <BoxHeader variant="yellow">
              <MapPinLine size={22} />
              <div>
                <span>Endereço de Entrega</span>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </BoxHeader>

            <FormInputs>
              <AddressFormInput
                size="m"
                type="text"
                placeholder="CEP"
                required
                {...register('cep')}
              />
              <AddressFormInput
                size="full"
                type="text"
                placeholder="Rua"
                required
                {...register('street')}
              />
              <InputsLine>
                <AddressFormInput
                  size="m"
                  type="text"
                  placeholder="Número"
                  required
                  {...register('number', { valueAsNumber: true })}
                />
                <AddressOptionalFormInput>
                  <input
                    type="text"
                    placeholder="Complemento"
                    {...register('complement')}
                  />
                  <span>Optional</span>
                </AddressOptionalFormInput>
              </InputsLine>
              <InputsLine>
                <AddressFormInput
                  size="m"
                  type="text"
                  placeholder="Bairro"
                  required
                  {...register('neighborhood')}
                />
                <AddressFormInput
                  size="l"
                  type="text"
                  placeholder="Cidade"
                  required
                  {...register('city')}
                />
                <AddressFormInput
                  size="s"
                  type="text"
                  placeholder="UF"
                  required
                  {...register('uf')}
                />
              </InputsLine>
            </FormInputs>
          </Address>

          <PaymentMethod>
            <BoxHeader variant="purple">
              <CurrencyDollar size={22} />
              <div>
                <span>Pagamento</span>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </BoxHeader>

            <Controller
              control={control}
              name="paymentMethod"
              render={({ field }) => {
                return (
                  <PaymentOptions
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <PaymentOptionsItem value="credit">
                      <CreditCard size={16} />
                      Cartão de crédito
                    </PaymentOptionsItem>

                    <PaymentOptionsItem value="debit">
                      <CreditCard size={16} />
                      Cartão de débito
                    </PaymentOptionsItem>

                    <PaymentOptionsItem value="money">
                      <CreditCard size={16} />
                      Dinheiro
                    </PaymentOptionsItem>
                  </PaymentOptions>
                )
              }}
            />
          </PaymentMethod>
        </form>
      </ClientInfos>

      <OrderContainer>
        <BoxTitle>Cafés selecionados</BoxTitle>

        <OrderContent>
          <div>
            {cartItems.map((item) => (
              <OrderCoffeeCard
                key={item.id}
                img={item.img}
                name={item.name}
                amount={item.amount}
                price={item.price}
              />
            ))}
          </div>
          <OrderSummary>
            <OrderSummaryRegularText>
              <p>Total de itens</p>
              <span>R$ 29,70</span>
            </OrderSummaryRegularText>
            <OrderSummaryRegularText>
              <p>Entrega</p>
              <span>R$ 3,50</span>
            </OrderSummaryRegularText>
            <OrderSummaryBoldText>
              <p>Total</p>
              <span>R$ 33,20</span>
            </OrderSummaryBoldText>
          </OrderSummary>

          <button>Confirmar pedido</button>
        </OrderContent>
      </OrderContainer>
    </CheckoutContainer>
  )
}
