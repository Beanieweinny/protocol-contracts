/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../common";

export interface SystemContractMockInterface extends utils.Interface {
  functions: {
    "gasCoinZRC20ByChainId(uint256)": FunctionFragment;
    "gasPriceByChainId(uint256)": FunctionFragment;
    "gasZetaPoolByChainId(uint256)": FunctionFragment;
    "onCrossChainCall(address,address,uint256,bytes)": FunctionFragment;
    "setGasCoinZRC20(uint256,address)": FunctionFragment;
    "setGasPrice(uint256,uint256)": FunctionFragment;
    "setWZETAContractAddress(address)": FunctionFragment;
    "uniswapv2FactoryAddress()": FunctionFragment;
    "uniswapv2PairFor(address,address,address)": FunctionFragment;
    "uniswapv2Router02Address()": FunctionFragment;
    "wZetaContractAddress()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "gasCoinZRC20ByChainId"
      | "gasPriceByChainId"
      | "gasZetaPoolByChainId"
      | "onCrossChainCall"
      | "setGasCoinZRC20"
      | "setGasPrice"
      | "setWZETAContractAddress"
      | "uniswapv2FactoryAddress"
      | "uniswapv2PairFor"
      | "uniswapv2Router02Address"
      | "wZetaContractAddress"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "gasCoinZRC20ByChainId",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "gasPriceByChainId",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "gasZetaPoolByChainId",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "onCrossChainCall",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setGasCoinZRC20",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setGasPrice",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setWZETAContractAddress",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "uniswapv2FactoryAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "uniswapv2PairFor",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "uniswapv2Router02Address",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "wZetaContractAddress",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "gasCoinZRC20ByChainId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "gasPriceByChainId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "gasZetaPoolByChainId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onCrossChainCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setGasCoinZRC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setGasPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setWZETAContractAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "uniswapv2FactoryAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "uniswapv2PairFor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "uniswapv2Router02Address",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "wZetaContractAddress",
    data: BytesLike
  ): Result;

  events: {
    "SetGasCoin(uint256,address)": EventFragment;
    "SetGasPrice(uint256,uint256)": EventFragment;
    "SetGasZetaPool(uint256,address)": EventFragment;
    "SetWZeta(address)": EventFragment;
    "SystemContractDeployed()": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "SetGasCoin"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetGasPrice"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetGasZetaPool"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetWZeta"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SystemContractDeployed"): EventFragment;
}

export interface SetGasCoinEventObject {
  arg0: BigNumber;
  arg1: string;
}
export type SetGasCoinEvent = TypedEvent<
  [BigNumber, string],
  SetGasCoinEventObject
>;

export type SetGasCoinEventFilter = TypedEventFilter<SetGasCoinEvent>;

export interface SetGasPriceEventObject {
  arg0: BigNumber;
  arg1: BigNumber;
}
export type SetGasPriceEvent = TypedEvent<
  [BigNumber, BigNumber],
  SetGasPriceEventObject
>;

export type SetGasPriceEventFilter = TypedEventFilter<SetGasPriceEvent>;

export interface SetGasZetaPoolEventObject {
  arg0: BigNumber;
  arg1: string;
}
export type SetGasZetaPoolEvent = TypedEvent<
  [BigNumber, string],
  SetGasZetaPoolEventObject
>;

export type SetGasZetaPoolEventFilter = TypedEventFilter<SetGasZetaPoolEvent>;

export interface SetWZetaEventObject {
  arg0: string;
}
export type SetWZetaEvent = TypedEvent<[string], SetWZetaEventObject>;

export type SetWZetaEventFilter = TypedEventFilter<SetWZetaEvent>;

export interface SystemContractDeployedEventObject {}
export type SystemContractDeployedEvent = TypedEvent<
  [],
  SystemContractDeployedEventObject
>;

export type SystemContractDeployedEventFilter =
  TypedEventFilter<SystemContractDeployedEvent>;

export interface SystemContractMock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SystemContractMockInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    gasCoinZRC20ByChainId(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    gasPriceByChainId(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    gasZetaPoolByChainId(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    onCrossChainCall(
      target: PromiseOrValue<string>,
      zrc20: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      message: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setGasCoinZRC20(
      chainID: PromiseOrValue<BigNumberish>,
      zrc20: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setGasPrice(
      chainID: PromiseOrValue<BigNumberish>,
      price: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setWZETAContractAddress(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    uniswapv2FactoryAddress(overrides?: CallOverrides): Promise<[string]>;

    uniswapv2PairFor(
      factory: PromiseOrValue<string>,
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string] & { pair: string }>;

    uniswapv2Router02Address(overrides?: CallOverrides): Promise<[string]>;

    wZetaContractAddress(overrides?: CallOverrides): Promise<[string]>;
  };

  gasCoinZRC20ByChainId(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  gasPriceByChainId(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  gasZetaPoolByChainId(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  onCrossChainCall(
    target: PromiseOrValue<string>,
    zrc20: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    message: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setGasCoinZRC20(
    chainID: PromiseOrValue<BigNumberish>,
    zrc20: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setGasPrice(
    chainID: PromiseOrValue<BigNumberish>,
    price: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setWZETAContractAddress(
    addr: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  uniswapv2FactoryAddress(overrides?: CallOverrides): Promise<string>;

  uniswapv2PairFor(
    factory: PromiseOrValue<string>,
    tokenA: PromiseOrValue<string>,
    tokenB: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  uniswapv2Router02Address(overrides?: CallOverrides): Promise<string>;

  wZetaContractAddress(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    gasCoinZRC20ByChainId(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    gasPriceByChainId(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    gasZetaPoolByChainId(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    onCrossChainCall(
      target: PromiseOrValue<string>,
      zrc20: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      message: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    setGasCoinZRC20(
      chainID: PromiseOrValue<BigNumberish>,
      zrc20: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setGasPrice(
      chainID: PromiseOrValue<BigNumberish>,
      price: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setWZETAContractAddress(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    uniswapv2FactoryAddress(overrides?: CallOverrides): Promise<string>;

    uniswapv2PairFor(
      factory: PromiseOrValue<string>,
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    uniswapv2Router02Address(overrides?: CallOverrides): Promise<string>;

    wZetaContractAddress(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "SetGasCoin(uint256,address)"(
      arg0?: null,
      arg1?: null
    ): SetGasCoinEventFilter;
    SetGasCoin(arg0?: null, arg1?: null): SetGasCoinEventFilter;

    "SetGasPrice(uint256,uint256)"(
      arg0?: null,
      arg1?: null
    ): SetGasPriceEventFilter;
    SetGasPrice(arg0?: null, arg1?: null): SetGasPriceEventFilter;

    "SetGasZetaPool(uint256,address)"(
      arg0?: null,
      arg1?: null
    ): SetGasZetaPoolEventFilter;
    SetGasZetaPool(arg0?: null, arg1?: null): SetGasZetaPoolEventFilter;

    "SetWZeta(address)"(arg0?: null): SetWZetaEventFilter;
    SetWZeta(arg0?: null): SetWZetaEventFilter;

    "SystemContractDeployed()"(): SystemContractDeployedEventFilter;
    SystemContractDeployed(): SystemContractDeployedEventFilter;
  };

  estimateGas: {
    gasCoinZRC20ByChainId(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    gasPriceByChainId(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    gasZetaPoolByChainId(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    onCrossChainCall(
      target: PromiseOrValue<string>,
      zrc20: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      message: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setGasCoinZRC20(
      chainID: PromiseOrValue<BigNumberish>,
      zrc20: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setGasPrice(
      chainID: PromiseOrValue<BigNumberish>,
      price: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setWZETAContractAddress(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    uniswapv2FactoryAddress(overrides?: CallOverrides): Promise<BigNumber>;

    uniswapv2PairFor(
      factory: PromiseOrValue<string>,
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    uniswapv2Router02Address(overrides?: CallOverrides): Promise<BigNumber>;

    wZetaContractAddress(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    gasCoinZRC20ByChainId(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    gasPriceByChainId(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    gasZetaPoolByChainId(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    onCrossChainCall(
      target: PromiseOrValue<string>,
      zrc20: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      message: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setGasCoinZRC20(
      chainID: PromiseOrValue<BigNumberish>,
      zrc20: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setGasPrice(
      chainID: PromiseOrValue<BigNumberish>,
      price: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setWZETAContractAddress(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    uniswapv2FactoryAddress(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    uniswapv2PairFor(
      factory: PromiseOrValue<string>,
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    uniswapv2Router02Address(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    wZetaContractAddress(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
