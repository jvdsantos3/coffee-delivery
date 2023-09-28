import { CreditCard, CurrencyDollar, MapPinLine } from 'phosphor-react'
import {
  Address,
  AddressFormInput,
  BoxHeader,
  BoxTitle,
  CheckoutContainer,
  ClientInfos,
  Order,
  PaymentMethod,
  PaymentOptions,
  PaymentOptionsItem,
} from './style'
import { Controller, useForm } from 'react-hook-form'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const completeOrderFormSchema = z.object({
  cep: z.string(),
  street: z.string(),
  number: z.string(),
  complemento: z.string().nullable(),
  neighborhood: z.string(),
  city: z.string(),
  uf: z.string(),
  paymentMethod: z.enum(['credit', 'debit', 'money']),
})

type CompleteOrderFormInputs = z.infer<typeof completeOrderFormSchema>

export function Checkout() {
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

            <div>
              <AddressFormInput
                type="text"
                placeholder="CEP"
                required
                {...register('cep')}
              />
            </div>
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

      <Order>
        <BoxTitle>Cafés selecionados</BoxTitle>
      </Order>
    </CheckoutContainer>
  )
}
