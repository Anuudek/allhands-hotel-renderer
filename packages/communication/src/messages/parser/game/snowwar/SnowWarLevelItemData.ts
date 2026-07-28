import { IMessageDataWrapper } from '@nitrots/api';

export class SnowWarLevelItemData
{
    private _name: string;
    private _x: number;
    private _y: number;
    private _rotation: number;
    private _imageUrl: string;
    private _offsetZ: number;
    private _walkableHeight: number;
    private _width: number;
    private _length: number;
    private _state: number;
    private _stateCount: number;

    constructor(wrapper: IMessageDataWrapper)
    {
        this._name = wrapper.readString();
        this._x = wrapper.readInt();
        this._y = wrapper.readInt();
        this._rotation = wrapper.readInt();
        this._imageUrl = wrapper.readString();
        this._offsetZ = wrapper.readInt();
        this._walkableHeight = wrapper.readInt();
        this._width = wrapper.readInt();
        this._length = wrapper.readInt();
        this._state = wrapper.readInt();
        this._stateCount = wrapper.readInt();
    }

    public get name(): string
    {
        return this._name;
    }

    public get x(): number
    {
        return this._x;
    }

    public get y(): number
    {
        return this._y;
    }

    public get rotation(): number
    {
        return this._rotation;
    }

    public get imageUrl(): string
    {
        return this._imageUrl;
    }

    public get offsetZ(): number
    {
        return this._offsetZ;
    }

    public get walkableHeight(): number
    {
        return this._walkableHeight;
    }

    public get width(): number
    {
        return this._width;
    }

    public get length(): number
    {
        return this._length;
    }

    public get state(): number
    {
        return this._state;
    }

    public get stateCount(): number
    {
        return this._stateCount;
    }
}
S